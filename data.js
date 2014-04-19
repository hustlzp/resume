var date = new Date()

module.exports = {
  pretty: true,
  date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
  // 联系方式
  contacts: [
    {
      title: 'Blog',
      link: 'http://hustlzp.com',
      image: 'image/icons/blog.png'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/hustlzp',
      image: 'image/icons/github.png'
    },
    {
      title: 'V2EX',
      link: 'https://www.v2ex.com/member/hustlzp',
      image: 'image/icons/v2ex.png'
    },
    {
      title: '豆瓣',
      link: 'http://www.douban.com/people/hustlzp',
      image: 'image/icons/douban.png'
    },
    {
      title: 'hustlzp@qq.com',
      image: 'image/icons/email.png'
    }
  ],
  // 项目
  projects: [
    {
      title: '乐创',
      desc: '3D打印团队“乐创”官网。',
      link: 'http://www.thu3d.com',
      image: 'http://hustlzp-resume.qiniudn.com/lemaker.jpg',
      tec: 'Flask / MySQL / Redis'
    },
    {
      title: '西窗烛',
      desc: '品味传统文学之美。',
      link: 'http://www.xichuangzhu.com',
      image: 'http://hustlzp-resume.qiniudn.com/xcz.jpg',
      tec: 'Flask / MySQL',
      source: 'https://github.com/hustlzp/xichuangzhu'
    },
    {
      title: 'Transy',
      desc: '中英翻译助手。',
      link: 'http://www.transy.org',
      image: 'http://hustlzp-resume.qiniudn.com/transy.png',
      tec: 'NodeJS / MongoDB',
      source: 'https://github.com/hustlzp/transy'
    },
    {
      title: 'Optico',
      desc: 'Website for Optico Company.',
      link: 'http://www.optico.com.cn',
      image: 'http://hustlzp-resume.qiniudn.com/optico.png',
      tec: 'Flask / MySQL / SendCloud',
      source: 'https://github.com/hustlzp/optico'
    },
    {
      title: 'YProgrammer',
      desc: '分享优质Web开发资源。',
      link: 'http://www.yprogrammer.com',
      image: 'http://hustlzp-resume.qiniudn.com/yp.png',
      tec: 'Django / MySQL',
      source: 'https://github.com/hustlzp/yprogrammer'
    },
    {
      title: 'AOD',
      desc: 'Demo for AOD Company.',
      link: 'http://hustlzp.github.io/aod',
      image: 'http://hustlzp-resume.qiniudn.com/aod.png',
      tec: 'HTML / CSS / JavaScript',
      source: 'https://github.com/hustlzp/aod/tree/gh-pages'
    }
  ],
  // 技能
  skills: [
    {
      name: 'Python',
      degree: '60'
    },
    {
      name: 'NodeJS',
      degree: '40'
    },
    {
      name: 'JavaScript',
      degree: '45'
    },
    {
      name: 'HTML / CSS',
      degree: '55'
    },
    {
      name: 'Git',
      degree: '50'
    },
    {
      name: 'MySQL / MongoDB / Redis',
      degree: '30'
    }
  ],
  // 书
  books: [
    {
      title: '小王子',
      image: 'http://hustlzp-resume.qiniudn.com/prince.jpg',
      link: 'http://book.douban.com/subject/2278402'
    },
    {
      title: '禅者的初心',
      image: 'http://hustlzp-resume.qiniudn.com/zen.jpg',
      link: 'http://book.douban.com/subject/4898627'
    },
    {
      title: '黑客与画家',
      image: 'http://hustlzp-resume.qiniudn.com/hp.jpg',
      link: 'http://book.douban.com/subject/6021440'
    },
    {
      title: '白领',
      image: 'http://hustlzp-resume.qiniudn.com/white-collar.jpg',
      link: 'http://book.douban.com/subject/1860946'
    },
    {
      title: '设计中的设计',
      image: 'http://hustlzp-resume.qiniudn.com/design.jpg',
      link: 'http://book.douban.com/subject/4230237'
    },
  ],
  // 教育
  educations: [
    {
      period: '2012.9 - 至今',
      title: '华中科技大学，光电学院 光电信息工程，硕士'
    },
    {
      period: '2008.9 - 2012.6',
      title: '华中科技大学，光电学院 光电信息工程，学士'
    }
  ]
}