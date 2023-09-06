const tags = ["Politic", "Health", "Food"];

const categories = ["Business", "Financial", "Technology", "Social"];

export const articles = [
  {
    id: 1,
    title: "sample title 1",
    excerpt: "sample excert 1",
    body: `LOREM IPSUM DOLOR SIT AMET ELIT VITAE PORTA DIAM...
  Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.'
  
  Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.
  
  LOREM IPSUM DOLOR SIT AMET ELIT
  
  Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.
  
  LOREM IPSUM DOLOR SIT AMET ELIT
  
  Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut.'
  `,
    release_date: "2023-08-27 12:00:00",
    category: "Business",
    thumbnail:
      "https://fastly.picsum.photos/id/606/1600/800.jpg?hmac=ZqHYrh882a5yHtD3DMdbceNJZLxq_D3tlLg0JXT2tqE",
    view: 4,
    author: {
      id: 1,
      name: "Quan",
      avatar:
        "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
    },
    tags: ["Politic", "Health", "Food"],
    comment: [
      {
        id: 1,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 2,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment 2",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 3,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment hirerachy 2.1",
        parent: 1,
        created_at: "2023-08-27 12:00:00",
      },
    ],
  },
  {
    id: 1,
    title: "sample title 1",
    excerpt: "sample excert 1",
    body: `LOREM IPSUM DOLOR SIT AMET ELIT VITAE PORTA DIAM...
 Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.'
 
 Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.
 
 LOREM IPSUM DOLOR SIT AMET ELIT
 
 Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.
 
 LOREM IPSUM DOLOR SIT AMET ELIT
 
 Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut.'
 `,
    release_date: "2023-08-27 12:00:00",
    category: "Business",
    thumbnail:
      "https://fastly.picsum.photos/id/606/1600/800.jpg?hmac=ZqHYrh882a5yHtD3DMdbceNJZLxq_D3tlLg0JXT2tqE",
    view: 12,
    author: {
      id: 1,
      name: "Quan",
      avatar:
        "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
    },
    tags: ["Politic", "Health", "Food"],
    comment: [
      {
        id: 1,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 2,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment 2",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 3,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment hirerachy 2.1",
        parent: 1,
        created_at: "2023-08-27 12:00:00",
      },
    ],
  },
  {
    id: 1,
    title: "sample title 1",
    excerpt: "sample excert 1",
    body: `LOREM IPSUM DOLOR SIT AMET ELIT VITAE PORTA DIAM...
Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.'

Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.

LOREM IPSUM DOLOR SIT AMET ELIT

Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.

LOREM IPSUM DOLOR SIT AMET ELIT

Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut.'
`,
    release_date: "2023-08-27 12:00:00",
    category: "Technology",
    thumbnail:
      "https://fastly.picsum.photos/id/606/1600/800.jpg?hmac=ZqHYrh882a5yHtD3DMdbceNJZLxq_D3tlLg0JXT2tqE",
    view: 11,
    author: {
      id: 1,
      name: "Quan",
      avatar:
        "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
    },
    tags: ["Politic", "Health", "Food"],
    comment: [
      {
        id: 1,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 2,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment 2",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 3,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment hirerachy 2.1",
        parent: 1,
        created_at: "2023-08-27 12:00:00",
      },
    ],
  },
  {
    id: 1,
    title: "sample title 1",
    excerpt: "sample excert 1",
    body: `LOREM IPSUM DOLOR SIT AMET ELIT VITAE PORTA DIAM...
Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.'

Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.

LOREM IPSUM DOLOR SIT AMET ELIT

Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.

LOREM IPSUM DOLOR SIT AMET ELIT

Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut.'
`,
    release_date: "2023-08-27 12:00:00",
    category: "Business",
    thumbnail:
      "https://fastly.picsum.photos/id/606/1600/800.jpg?hmac=ZqHYrh882a5yHtD3DMdbceNJZLxq_D3tlLg0JXT2tqE",
    view: 6,
    author: {
      id: 1,
      name: "Quan",
      avatar:
        "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
    },
    tags: ["Politic", "Health", "Food"],
    comment: [
      {
        id: 1,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 2,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment 2",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 3,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment hirerachy 2.1",
        parent: 1,
        created_at: "2023-08-27 12:00:00",
      },
    ],
  },
  {
    id: 1,
    title: "sample title 1",
    excerpt: "sample excert 1",
    body: `LOREM IPSUM DOLOR SIT AMET ELIT VITAE PORTA DIAM...
Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.'

Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.

LOREM IPSUM DOLOR SIT AMET ELIT

Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.

LOREM IPSUM DOLOR SIT AMET ELIT

Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut.'
`,
    release_date: "2023-08-27 12:00:00",
    category: "Business",
    thumbnail:
      "https://fastly.picsum.photos/id/606/1600/800.jpg?hmac=ZqHYrh882a5yHtD3DMdbceNJZLxq_D3tlLg0JXT2tqE",
    view: 5,
    author: {
      id: 1,
      name: "Quan",
      avatar:
        "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
    },
    tags: ["Politic", "Health", "Food"],
    comment: [
      {
        id: 1,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 2,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment 2",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 3,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment hirerachy 2.1",
        parent: 1,
        created_at: "2023-08-27 12:00:00",
      },
    ],
  },
  {
    id: 1,
    title: "sample title 1",
    excerpt: "sample excert 1",
    body: `LOREM IPSUM DOLOR SIT AMET ELIT VITAE PORTA DIAM...
Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.'

Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.

LOREM IPSUM DOLOR SIT AMET ELIT

Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.

LOREM IPSUM DOLOR SIT AMET ELIT

Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut.'
`,
    release_date: "2023-08-27 12:00:00",
    category: "Finalcial",
    thumbnail:
      "https://fastly.picsum.photos/id/606/1600/800.jpg?hmac=ZqHYrh882a5yHtD3DMdbceNJZLxq_D3tlLg0JXT2tqE",
    view: 11,
    author: {
      id: 1,
      name: "Quan",
      avatar:
        "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
    },
    tags: ["Politic", "Health", "Food"],
    comment: [
      {
        id: 1,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 2,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment 2",
        parent: 0,
        created_at: "2023-08-27 12:00:00",
      },
      {
        id: 3,
        author: {
          id: 1,
          name: "Quan",
          avatar:
            "https://fastly.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        },
        content: "sample comment hirerachy 2.1",
        parent: 1,
        created_at: "2023-08-27 12:00:00",
      },
    ],
  },
];
