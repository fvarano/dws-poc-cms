module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e30035a05f97d94b5446b5d42a41d08b'),
  },
});
