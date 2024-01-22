"use server";

import { sql } from "@vercel/postgres";

interface ambassadorData {name: string, email: string, phoneNumber: string, clgName: string, yearOfStudy: string, courseName: string, clgCity: string, interest: string, skillExp: string, keyTopic: string, dateAndTime: string, preference: string, hoursAvailable: string, photoLink: string}

export async  function  registerAmbassador(ambassadorData: ambassadorData) {
    const {name, email, phoneNumber, clgName, yearOfStudy, courseName, clgCity, interest, skillExp, keyTopic, dateAndTime, preference, hoursAvailable, photoLink} = {...ambassadorData}
    try {
        const { rows } = await sql`
        INSERT INTO registerambassador(name, email, phone_number, college_name, year_of_study, course_name, college_city, interest, skill_exp, key_topic, date_and_time, preference, hours_available, photo_link)
        VALUES(${name}, ${email}, ${phoneNumber}, ${clgName}, ${yearOfStudy}, ${courseName}, ${clgCity}, ${interest}, ${skillExp}, ${keyTopic}, ${dateAndTime}, ${preference}, ${hoursAvailable}, ${photoLink});
        `;
        console.log(rows)
        return true
    } catch (error: any) {
      const lines = error.toString().split("\n");
      const lastLine = lines[lines.length - 1].trim();
      console.log("->> last", lastLine, "< --");
      return false
    }
    return true
  }
  