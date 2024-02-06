import { faker } from "@faker-js/faker";

import liquid from "../assets/img/foxhound gang/liquid.png";
import mantis from "../assets/img/foxhound gang/mantis.png";
import ocelot from "../assets/img/foxhound gang/ocelot.png";
import octopus from "../assets/img/foxhound gang/octopus.png";
import raven from "../assets/img/foxhound gang/raven.png";
import sniper from "../../src/assets/img/foxhound gang/sniper.png";

const DatabaseResponse = {
  profile: {
    CounterFollower: faker.number.int(5000),
    CounterFollowing: faker.number.int(150),
    CounterPosts: faker.number.int(50),
  },
  posts: [
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
  ],
};

export default DatabaseResponse;
