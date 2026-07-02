-- Standard Admin account seed for Better Auth with Drizzle/MySQL
-- Login: admin@luftrettung.de
-- Passwort: Admin1234!

INSERT INTO `user` (
  `id`,
  `name`,
  `email`,
  `emailVerified`,
  `image`,
  `role`,
  `createdAt`,
  `updatedAt`
) VALUES (
  'admin-0001',
  'Administrator',
  'admin@luftrettung.de',
  TRUE,
  NULL,
  'admin',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

INSERT INTO `account` (
  `id`,
  `accountId`,
  `providerId`,
  `userId`,
  `accessToken`,
  `refreshToken`,
  `idToken`,
  `accessTokenExpiresAt`,
  `refreshTokenExpiresAt`,
  `scope`,
  `password`,
  `createdAt`,
  `updatedAt`
) VALUES (
  'account-admin-0001',
  'admin@luftrettung.de',
  'credential',
  'admin-0001',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  '125b3f7650a8454c1e03f1e637ae02de:4635c6c294ac0fd9ee2ad072bd1d4b1b3f26b0e03b9b5cab32b41fffbcb0c1932aa582601a173abacaec037fe182808169f46960960dffc826c6062e60b4f285',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);
