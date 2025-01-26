import { db } from "@vercel/postgres";

const client = await db.connect();

async function listInvoices() {
	const data = await client.sql`
    update invoices set amount=666 WHERE amount = 650
  `;
  // SELECT invoices.amount, customers.name
  // FROM invoices
  // JOIN customers ON invoices.customer_id = customers.id
  // WHERE invoices.amount = 666;
	return data;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
  	return Response.json(await listInvoices());
  } catch (error) {
    console.log(error);
  	return Response.json({ error }, { status: 500 });
  }
}
