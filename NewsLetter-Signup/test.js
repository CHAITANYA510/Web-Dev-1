const mailchimpClient = require("@mailchimp/mailchimp_marketing");

//api key
const apiKey = "cee465601b1cbeac9625edb2065d8373-us18";
//get from audience setting
const listId = "3e90f0e2f6";

//for normal auth
mailchimpClient.setConfig({
  apiKey: apiKey,
  server: "us18",
})

//to get ping info
const run1 = async () => {
  //ping
  const response = await mailchimpClient.ping.get();
  //
  //const response = await client.root.getRoot();
  console.log(response);
};
//run1();

//to get various root information
const run2 = async () => {
  const response = await mailchimpClient.lists.createList({
    name: "Chaitanya",
    permission_reminder: "permission_reminder",
    email_type_option: true,
    contact: {
      company: "company",
      address1: "address1",
      city: "Mumbai",
      country: "India",
    },
    campaign_defaults: {
      from_name: "Chaitanya",
      from_email: "chaitanya.510.cc@gmail.com",
      subject: "Annual Newsletter",
      language: "HTML",
    },
  });
  console.log(response);
};
//run2();

//TO create audience - only 1 allowed in free tier
const createAudiance = async () =>  {
  const event = {
    name: "Annual News Letter"
  };

  const footerContactInfo = {
    company: "Test Company",
    address1: "Borivali",
    //address2: "Suite 5000",
    city: "Mumbai",
    state: "MH",
    zip: "400066",
    country: "India"
  };

  const campaignDefaults = {
    from_name: "Chaitanya",
    from_email: "chaitanya.510.cc@gmail.com",
    subject: "Annual Newsletter",
    language: "EN_US"
  };

  async function run() {
    const response = await mailchimpClient.lists.createList({
      name: event.name,
      contact: footerContactInfo,
      permission_reminder: "permission_reminder",
      email_type_option: true,
      campaign_defaults: campaignDefaults
    });

    console.log(
      `Successfully created an audience. The audience id is ${response.id}.`
    );
  }
  //run();

}
//createAudiance();

//User details to add
const subscribingUser = {
  firstName: "Niranjan",
  lastName: "Chotalia",
  status: "subscribed",
  email: "chaitanya5@gmail.com"
};

//To add contact into existing lists
const addMemberToList = async () => {
  async function run() {
    const response = await mailchimpClient.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: subscribingUser.status,
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName
      }
    });
    console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
  }
  run();
}

//run();

addMemberToList();
