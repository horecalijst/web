import { gql } from '@apollo/client';
import { format } from '@fast-csv/format';
import { format as formatDate } from 'date-fns';
import { nl as locale } from 'date-fns/locale';
import { NextApiRequest, NextApiResponse } from 'next';
import Cookie from 'services/cookie';
import Network from 'services/network';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  Cookie.init({ req } as any);
  const { date, id } = req.query;

  try {
    const { data } = await Network.apollo.query({
      query: gql`
        query($businessId: String!, $date: String) {
          contacts(businessId: $businessId, date: $date) {
            id
            name
            email
            phone
            createdAt
          }
          business(id: $businessId) {
            name
          }
        }
      `,
      variables: {
        businessId: id,
        date,
      },
    });

    const stream = format({
      headers: ['Naam', 'Email', 'Telefoonnummer', 'Datum'],
    });

    for (const contact of data.contacts) {
      stream.write([
        contact.name || '--',
        contact.email || '--',
        contact.phone || '--',
        formatDate(
          new Date(parseInt(contact.createdAt)),
          'dd MMMM yyyy, HH:mm',
          { locale },
        ),
      ]);
    }

    if (data.contacts.length === 0) {
      stream.write([]);
    }

    const formattedDate = formatDate(
      new Date(parseInt(`${date}`)),
      'yyyy-MM-dd',
    );

    res.setHeader('Content-type', 'text/csv');
    res.setHeader(
      'Content-disposition',
      `attachment;filename=Export ${formattedDate} (${data.business.name}).csv`,
    );
    stream.pipe(res);
    stream.end();
    return;
  } catch (e) {
    res.status(500);
    return;
  }
};
