import { prisma, hashPassword } from "../src/helpers/utils.js";

const userData = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: "12345",
  },
];

const genders = [
  {
    name: "Ação",
  },
  {
    name: "Comédia",
  },
  {
    name: "Terror",
  },
  {
    name: "Suspense",
  },
  {
    name: "Drama",
  },
  {
    name: "Ficção Científica",
  },
  {
    name: "Documentário",
  },
  {
    name: "Romance",
  },
  {
    name: "Corrida",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  let users = await prisma.user.findMany({
    select: { email: true },
  });
  if (!!users.length) {
    console.log(`Nothing to do here`);
    return;
  }
  for (const u of userData) {
    const hashedPassword = await hashPassword(u.password);
    const userData = { ...u, password: hashedPassword };
    const user = await prisma.user.create({
      data: userData,
    });
    console.log(`Created user with id: ${user.id}`);
  }

  for (const g of genders) {
    const { name } = g;
    const gender = await prisma.gender.create({
      data: {
        name,
      },
    });
    console.log(`Created gender: ${gender}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
