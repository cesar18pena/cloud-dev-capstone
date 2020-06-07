export const config = {
  dev: {
    username: "user",
    password: "password",
    database: "db",
    host: "postgres",
    dialect: "postgres",
    aws_reigion: process.env.AWS_REGION,
    aws_profile: process.env.AWS_PROFILE,
    aws_media_bucket: process.env.AWS_BUCKET,
    url: process.env.URL,
  },
  prod: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "postgres",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
