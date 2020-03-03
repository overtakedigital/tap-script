require("dotenv").config();
const { subDays } = require("date-fns");
const { parse } = require("json2csv");
const fs = require("fs-extra");
const tapClassifieds = require("./lib/tap-classifieds");
const sendEmailCSV = require("./lib/email");
const {
  METRICS_FIELDS,
  DEALERS,
  CHAT_FIELDS,
  EMAIL_FIELDS,
  TEXT_FIELDS,
  CALL_FIELDS
} = require("./lib/constants");

const END_DATE = new Date();
const START_DATE = subDays(END_DATE, 100);
const METRICS_EMAIL = process.env.METRICS_EMAIL;
const CHAT_EMAIL = process.env.CHAT_EMAIL;
const EMAIL_EMAIL = process.env.EMAIL_EMAIL;
const TEXT_EMAIL = process.env.TEXT_EMAIL;
const CALL_EMAIL = process.env.CALL_EMAIL;

async function getMetrics(dealers) {
  let metrics = [];
  for (const dealer of dealers) {
    const res = await tapClassifieds.dashboardMetrics({
      dealerID: dealer.dealerID,
      dealerName: dealer.dealerName,
      endDate: END_DATE,
      startDate: START_DATE
    });
    metrics = [...metrics, ...res];
  }

  const csv = parse(metrics, {
    fields: METRICS_FIELDS
  });

  await fs.writeFile("data/metrics.csv", csv);

  await sendEmailCSV({
    to: METRICS_EMAIL,
    subject: "Dashboard Metrics",
    text: "Dashboard Metrics",
    content: csv
  });
}

async function getChatLeads(dealers) {
  let chatLeads = [];
  for (const dealer of dealers) {
    const res = await tapClassifieds.chatLeads({
      dealerID: dealer.dealerID,
      dealerName: dealer.dealerName,
      endDate: END_DATE,
      startDate: START_DATE
    });
    chatLeads = [...chatLeads, ...res];
  }

  const csv = parse(chatLeads, {
    fields: CHAT_FIELDS
  });

  await fs.writeFile("data/chat_leads.csv", csv);

  await sendEmailCSV({
    to: CHAT_EMAIL,
    subject: "Chat Leads",
    text: "Chat Leads",
    content: csv
  });
}

async function getEmailLeads(dealers) {
  let emailLeads = [];
  for (const dealer of dealers) {
    const res = await tapClassifieds.emailLeads({
      dealerID: dealer.dealerID,
      dealerName: dealer.dealerName,
      endDate: END_DATE,
      startDate: START_DATE
    });
    emailLeads = [...emailLeads, ...res];
  }

  const csv = parse(emailLeads, {
    fields: EMAIL_FIELDS
  });

  await fs.writeFile("data/email_leads.csv", csv);

  await sendEmailCSV({
    to: EMAIL_EMAIL,
    subject: "Email Leads",
    text: "Email Leads",
    content: csv
  });
}

async function getTextLeads(dealers) {
  let textLeads = [];
  for (const dealer of dealers) {
    const res = await tapClassifieds.textLeads({
      dealerID: dealer.dealerID,
      dealerName: dealer.dealerName,
      endDate: END_DATE,
      startDate: START_DATE
    });
    textLeads = [...textLeads, ...res];
  }

  const csv = parse(textLeads, {
    fields: TEXT_FIELDS
  });

  await fs.writeFile("data/text_leads.csv", csv);

  await sendEmailCSV({
    to: TEXT_EMAIL,
    subject: "Text Leads",
    text: "Text Leads",
    content: csv
  });
}

async function getCallLeads(dealers) {
  let callLeads = [];
  for (const dealer of dealers) {
    const res = await tapClassifieds.callLeads({
      dealerID: dealer.dealerID,
      dealerName: dealer.dealerName,
      endDate: END_DATE,
      startDate: START_DATE
    });
    callLeads = [...callLeads, ...res];
  }

  const csv = parse(callLeads, {
    fields: CALL_FIELDS
  });

  await fs.writeFile("data/call_leads.csv", csv);

  await sendEmailCSV({
    to: CALL_EMAIL,
    subject: "Call Leads",
    text: "Call Leads",
    content: csv
  });
}

async function main() {
  await Promise.all([
    getChatLeads(DEALERS),
    getEmailLeads(DEALERS),
    getMetrics(DEALERS),
    getTextLeads(DEALERS),
    getCallLeads(DEALERS)
  ]);
}

main();
