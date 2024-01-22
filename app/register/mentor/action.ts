"use server";

import { sql } from "@vercel/postgres";

interface mentorData {name: string, position: string,organization: string, email: string, phoneNumber: string, techBackground: string, experience: string, topics: string, dateAndTime: string, preference: string, hoursAvailable: string}

export async  function  registerMentor(mentorData: mentorData | null) {
    const {name, position,organization, email,phoneNumber, techBackground, experience, topics, dateAndTime, preference, hoursAvailable} = {...mentorData}
    try {
        console.log(mentorData)
        const { rows } = await sql`
        INSERT INTO registermentor(name, position, organization, email, phone_number,  tech_background, experience, topics, date_and_time, preference, hours_available)
        VALUES(${name}, ${position}, ${organization}, ${email}, ${phoneNumber}, ${techBackground}, ${experience}, ${topics}, ${dateAndTime}, ${preference}, ${hoursAvailable});
        `;
    } catch (error: any) {
      const lines = error.toString().split("\n");
      const lastLine = lines[lines.length - 1].trim();
      console.log("->> last", lastLine, "< --");
    }
  }
  