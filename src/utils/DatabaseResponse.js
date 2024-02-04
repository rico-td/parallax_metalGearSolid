import { faker } from "@faker-js/faker";

const DatabaseResponse = {
  profile: {
    CounterFollower: faker.number.int(5000),
    CounterFollowing: faker.number.int(150),
    CounterPosts: faker.number.int(50),
  },
  posts: [
    {
      image: "./assets/img/foxhound gang/liquid.png",
      text: faker.lorem.lines(5),
      id: 1,
    },
    {
      image: "./assets/img/foxhound gang/mantis.png",
      text: faker.lorem.lines(5),
      id: 2,
    },
    {
      image: "./assets/img/foxhound gang/ocelot.png",
      text: faker.lorem.lines(5),
      id: 3,
    },
    {
      image: "./assets/img/foxhound gang/octopus.png",
      text: faker.lorem.lines(5),
      id: 4,
    },
    {
      image: "./assets/img/foxhound gang/raven.png",
      text: faker.lorem.lines(5),
      id: 5,
    },
    {
      image: "./assets/img/foxhound gang/sniper.png",
      text: faker.lorem.lines(5),
      id: 6,
    },
  ],
};

export default DatabaseResponse;
