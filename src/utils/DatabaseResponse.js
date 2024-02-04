import { faker } from "@faker-js/faker";

const DatabaseResponse = {
  profile: {
    followerCount: faker.number.int(5000),
    followingCount: faker.number.int(150),
    postCount: faker.number.int(50),
  },
  posts: [
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
  ],
};

export default DatabaseResponse;
