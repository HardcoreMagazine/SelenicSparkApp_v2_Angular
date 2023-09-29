const PROXY_CONFIG = [
  {
    context: [
      "/posts",
    ],
    target: "https://localhost:44346",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
