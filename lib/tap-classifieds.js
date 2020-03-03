const querystring = require("querystring");
const crypto = require("crypto");
const axios = require("axios");
const { format } = require("date-fns");

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

function getSignature(params) {
  const query = querystring.stringify(params);
  const sig = crypto
    .createHmac("sha1", API_SECRET)
    .update(query)
    .digest("base64");

  return sig;
}

async function dashboardMetrics(data) {
  const params = {
    dealer: data.dealerID,
    endDate: format(data.endDate, "YYYY-MM-DD"),
    keyId: API_KEY,
    level: "dealer",
    startDate: format(data.startDate, "YYYY-MM-DD")
  };

  params.sig = getSignature(params);

  const res = await axios.get(
    "http://api.tapclassifieds.com/dashboardMetrics.php",
    {
      params
    }
  );

  return res.data.data.map(row => ({
    ...row,
    "Account Name": data.dealerName
  }));
}

async function chatLeads(data) {
  const params = {
    dealer: data.dealerID,
    endDate: format(data.endDate, "YYYY-MM-DD"),
    keyId: API_KEY,
    level: "dealer",
    startDate: format(data.startDate, "YYYY-MM-DD"),
    type: "im"
  };

  params.sig = getSignature(params);

  const res = await axios.get("http://api.tapclassifieds.com/leadList.php", {
    params
  });

  return res.data.data.map(row => ({
    ...row,
    "Account Name": data.dealerName,
    message: row.message.replace(/(?:\r\n|\r|\n)/g, " ")
  }));
}

async function emailLeads(data) {
  const params = {
    dealer: data.dealerID,
    endDate: format(data.endDate, "YYYY-MM-DD"),
    keyId: API_KEY,
    level: "dealer",
    startDate: format(data.startDate, "YYYY-MM-DD"),
    type: "email"
  };

  params.sig = getSignature(params);

  const res = await axios.get("http://api.tapclassifieds.com/leadList.php", {
    params
  });

  return res.data.data.map(row => ({
    ...row,
    "Account Name": data.dealerName,
    email_content: row.email_content.replace(/(?:\r\n|\r|\n)/g, " ")
  }));
}

async function textLeads(data) {
  const params = {
    dealer: data.dealerID,
    endDate: format(data.endDate, "YYYY-MM-DD"),
    keyId: API_KEY,
    level: "dealer",
    startDate: format(data.startDate, "YYYY-MM-DD"),
    type: "text"
  };

  params.sig = getSignature(params);

  const res = await axios.get("http://api.tapclassifieds.com/leadList.php", {
    params
  });

  return res.data.data.map(row => ({
    ...row,
    "Account Name": data.dealerName,
    text_message: row.text_message.replace(/(?:\r\n|\r|\n)/g, " ")
  }));
}

async function callLeads(data) {
  const params = {
    dealer: data.dealerID,
    endDate: format(data.endDate, "YYYY-MM-DD"),
    keyId: API_KEY,
    level: "dealer",
    startDate: format(data.startDate, "YYYY-MM-DD"),
    type: "phone"
  };

  params.sig = getSignature(params);

  const res = await axios.get("http://api.tapclassifieds.com/leadList.php", {
    params
  });

  return res.data.data.map(row => ({
    ...row,
    "Account Name": data.dealerName
  }));
}

module.exports = {
  chatLeads,
  dashboardMetrics,
  emailLeads,
  textLeads,
  callLeads
};
