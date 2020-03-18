const DEALERS = [{
    dealerName: "Headquarter Honda Custom Dashboard Build",
    dealerID: "1556775683"
  },
  {
    dealerName: "Headquarter Honda",
    dealerID: "1556775683"
  },
  {
    dealerName: "Arlington Toyota-Master",
    dealerID: "1541127549"
  },
  {
    dealerName: "Roesch CDJR Master",
    dealerID: "1555482600"
  },
  {
    dealerName: "New Wave Auto Sales",
    dealerID: "1551683411"
  },
  {
    dealerID: "1551417566",
    dealerName: "Rizza Buick GMC"
  },
  {
    dealerID: "1551417566",
    dealerName: "Rizza Cadillac"
  },
  {
    dealerName: "Castle Honda",
    dealerID: "1540535223"
  },
  {
    dealerName: "Ron Westphal Chevrolet",
    dealerID: "1549441620"
  },
  {
    dealerName: "Roesch CDJR Master",
    dealerID: "1555482600"
  },
  {
    dealerName: "Uebelhor Chevrolet of Jasper",
    dealerID: "1546920253"
  },
  {
    dealerName: "Uebelhor Toyota",
    dealerID: "1546918792"
  },
  {
    dealerName: "Uebelhor Buick GMC of Vincennes",
    dealerID: "1547527671"
  },
  {
    dealerName: "Uebelhor Cadillac of Vincennes",
    dealerID: "1547527671"
  },
  {
    dealerName: "Marty Cancila DCJR Florissant",
    dealerID: "1559016280"
  },
  {
    dealerName: "Marty Cancila CDJR Jerseyville",
    dealerID: "1559019146"
  },
  {
    dealerName: "Keystone Chevrolet",
    dealerID: "1542784426"
  },
  {
    dealerName: "Green Toyota",
    dealerID: "1552965019"
  },
  {
    dealerName: "Headquarter Hyundai",
    dealerID: "1562045417"
  },
  {
    dealerName: "Lighthouse Buick GMC",
    dealerID: "1565663899"
  },
  {
    dealerName: "Mancari CDJR",
    dealerID: "1565841220"
  },
  {
    dealerName: "Gillis Auto Center",
    dealerID: "1569901533"
  },
  {
    dealerName: "Crossroads Buick GMC",
    dealerID: "1570417937"
  },
  {
    dealerName: "Sandy Sansing Chevrolet",
    dealerID: "1572586235"
  },
  {
    dealerName: "Sandy & Bubba's Milton Chevrolet",
    dealerID: "1572582448"
  },
  {
    dealerName: "US Auto Sales",
    dealerID: "1572596868"
  },
  {
    dealerName: "Short-Redmond Ford",
    dealerID: "1575263008"
  },
  {
    dealerName: "Shaver Preferred Motors",
    dealerID: "1547444896"
  },
  {
    dealerName: "Lexus of North Miami",
    dealerID: "1573529283"
  }
];

const METRICS_FIELDS = [
  "Account Name",
  "seller_id",
  "track_date",
  "live_posted_cars",
  "posted_sold_cars",
  "landing_page_visits",
  "mobile_landing_page_visits",
  "lp_visits_direct",
  "lp_visits_google",
  "lp_visits_facebook",
  "lp_visits_yahoo",
  "lp_visits_bing",
  "lp_visits_other",
  "mobile_lp_visits_direct",
  "mobile_lp_visits_google",
  "mobile_lp_visits_facebook",
  "mobile_lp_visits_yahoo",
  "mobile_lp_visits_bing",
  "mobile_lp_visits_other",
  "srp_visits",
  "received_calls",
  "received_car_level_calls",
  "total_received_calls",
  "average_call_duration",
  "unanswered_calls",
  "num_text_leads",
  "total_received_texts",
  "received_car_level_texts",
  "total_received_emails",
  "received_finance_apps",
  "received_test_drive",
  "received_webuycar",
  "dealer_website_clicked",
  "car_picture_clicked",
  "car_details_clicked",
  "map_address_clicked",
  "video_clicked",
  "webuycar_clicked",
  "finance_clicked",
  "test_drive_clicked",
  "email_clicked",
  "print_map_clicked",
  "print_car_clicked",
  "chat_clicked",
  "facebook_clicked",
  "twitter_clicked",
  "googleplus_clicked",
  "pinterest_clicked",
  "carfax_clicked",
  "total_leads_last_30_days",
  "billable_cars_posted",
  "send_to_mobile_clicked",
  "received_vehicle_value_check",
  "received_schedule_trade",
  "live_sold_inventory",
  "received_emails",
  "posting_cost",
  "unique_leads",
  "total_leads",
  "cost_per_lead",
  "total_unanswered_leads",
  "received_chats",
  "total_received_chats",
  "new_chat_conversations",
  "new_chat_customers",
  "active_chat_conversations",
  "new_text_conversations",
  "new_text_customers",
  "active_text_conversations",
  "received_car_level_chats"
];

const CHAT_FIELDS = [
  "Account Name",
  "text_lead_id",
  "dealer_id",
  "account_id",
  "campaign_id",
  "provider_id",
  "vehicle_id",
  "lead_source",
  "lead_status",
  "chat_owner_id",
  "lead_received_time",
  "message_id",
  "message",
  "reply_link",
  "customer_id",
  "tracking_number",
  "customer_name",
  "customer_email",
  "customer_phone"
];

const EMAIL_FIELDS = [
  "Account Name",
  "email_lead_id",
  "dealer_id",
  "account_id",
  "campaign_id",
  "provider_id",
  "lead_source",
  "lead_status",
  "lead_received_time",
  "customer_name",
  "customer_email",
  "customer_phone",
  "email_subject",
  "email_content",
  "vehicle_id",
  "vehicle",
  "thumbnail_url",
  "stock_number",
  "landing_page_link",
  "caller_region",
  "caller_state",
  "ad_region",
  "ad_state"
];

const TEXT_FIELDS = [
  "Account Name",
  "text_lead_id",
  "dealer_id",
  "account_id",
  "campaign_id",
  "provider_id",
  "vehicle_id",
  "lead_source",
  "lead_status",
  "chat_owner_id",
  "lead_received_time",
  "message_id",
  "text_subject",
  "text_message",
  "text_back_link",
  "tracking_number",
  "customer_number",
  "caller_region",
  "caller_state",
  "ad_region",
  "ad_state"
];

const CALL_FIELDS = [
  "Account Name",
  "phone_lead_id",
  "dealer_id",
  "account_id",
  "campaign_id",
  "provider_id",
  "car_id",
  "lead_source",
  "lead_status",
  "call_start_time",
  "call_end_time",
  "call_duration",
  "call_status",
  "customer_number",
  "customer_name",
  "recorded",
  "call_listen_link",
  "call_download_link",
  "tracking_number",
  "caller_region",
  "caller_state",
  "ad_region",
  "ad_state"
];

module.exports = {
  CHAT_FIELDS,
  DEALERS,
  EMAIL_FIELDS,
  METRICS_FIELDS,
  TEXT_FIELDS,
  CALL_FIELDS
};