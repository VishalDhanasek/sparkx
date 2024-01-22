"use server";


import { sql } from "@vercel/postgres";


export async  function  submitContactUs(name: string, email:string, message:string) {
  try {
    const { rows } = await sql`
    INSERT INTO contact(name, email, message)
    VALUES(${name}, ${email}, ${message});
  `;
  } catch (error: any) {
    const lines = error.toString().split("\n");
    const lastLine = lines[lines.length - 1].trim();
    console.log("->> last", lastLine, "< --");
  }
}
