export const getCSV = (userIds, questions) => {
  return fetch("https://api.geekbot.io/standups/28588/csv", {
    "credentials":
      "include",
    "headers":
    {
      "accept": "application/json, text/plain, */*",
      "authorization": "usr_5c1a50190ec2d8.07621909",
      "content-type": "application/json;charset=UTF-8"
    },
    "referrer":
      "https://geekbot.com/dashboard/standup/28588/view",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body":
      "{\"user_ids\":[\"UDU7L20TB\",\"UD131BZJM\",\"UD5LTMTK6\",\"UEHNPM21J\"],\"question_ids\":[1190503,1190504,1190505,1190506],\"since\":1544623570,\"after\":1545292799}",
    "method": "POST",
    "mode": "cors"
  });
}
