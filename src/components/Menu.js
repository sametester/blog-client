import React from 'react';

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: 'วิตามินและแร่ธาตุที่สำคัญ ช่วยเพิ่มภูมิคุ้มกันในร่างกาย',
      desc: 'วิตามินเอ นอกจากจะมีส่วนช่วยในเรื่องของการมองเห็นแล้ว ยังช่วยสร้างระบบภูมิคุ้มกันที่ดีให้แก่ร่างกายของเราอีกด้วย',
      img: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
      // img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title:
        'วิตามินซี หลายคนก็พอจะทราบกันดีอยู่แล้วว่าวิตามินซีนั้น มีส่วนช่วยในการบำรุงผิวพรรณให้ดูสวยงามอย่างมีสุขภาพดี',
      desc: 'เนื่องจากวิตามินซี มีส่วนช่วยให้เซลล์เม็ดเลือดขาวทำงานได้อย่างมีประสิทธิภาพมากขึ้นและช่วยในกระบวนการกำจัดเชื้อโรคหรือสิ่งแปลกปลอมในร่างกายของเรา วิตามินซีนั้นมักจะอยู่ในอาหาร โดยเฉพาะผักและผลไม้ เช่น ผลไม้ที่มีรสเปรี้ยว บล็อคโคลี กะหล่ำปลี มะเขือเทศ เป็นต้น อย่างไรก็ตามมีคำแนะนำจากแพทย์ว่าเด็กที่มีอายุ 1-8 ปี ควรได้รับวิตามินซี 25-40 มิลลิกรัมต่อวัน วัยรุ่นที่มีอายุช่วง 9-18 ปี ควรได้รับ 60-100 มิลลิกรัมต่อวัน และผู้ใหญ่ที่มีอายุตั้งแต่ 19 ปีขึ้นไป ควรได้รับวิตามินซีในปริมาณ 85-100 มิลลิกรัมต่อวัน',
      img: 'https://images.pexels.com/photos/2583373/pexels-photo-2583373.jpeg',
      // img: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title:
        'โปรไบโอติก หรือจุลินทรีย์สุขภาพ ช่วยส่งเสริมระบบภูมิคุ้มกันในร่างกายของมนุษย์ โดยโปรไบโอติกส่วนใหญ่ที่เรารู้จักกันก็คือจุลินทรีย์โปรไบโอติกที่อยู่ในโยเกิร์ต',
      desc: 'โปรไบโอติก หรือจุลินทรีย์สุขภาพ ช่วยส่งเสริมระบบภูมิคุ้มกันในร่างกายของมนุษย์ โดยโปรไบโอติกส่วนใหญ่ที่เรารู้จักกันก็คือจุลินทรีย์โปรไบโอติกที่อยู่ในโยเกิร์ต',
      img: 'https://www.organicbook.com/wp-content/uploads/2019/03/yogurt-1235353_1280.jpg',
      // img: 'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title:
        'วิตามินดี ช่วยป้องกันโรคกระดูกพรุนหรือโรคกระดูกบาง อีกทั้งยังทำให้สุขภาพฟันและเหงือกแข็งแรงด้วย',
      desc: 'แต่ยังช่วยส่งเสริมระบบภูมิคุ้มกันหรือภูมิต้านทานในร่างกายของเราได้ โดยวิตามินดีมีโครงสร้างที่คล้ายคลึงกับฮอร์โมนเพศ ช่วยลดฮอร์โมนพาราไทรอยด์ ป้องกันการสูญเสียแคลเซียมช่วยสร้างสมดุลน้ำตาลในเส้นเลือดและป้องกันโรคเบาหวาน นอกจากนั้นยังช่วยควบคุมการทำงานของเซลล์เม็ดเลือดขาวทุกชนิดในระบบภูมิคุ้มกันของร่างกาย ช่วยต้านทานโรคภูมิแพ้ และโรคมะเร็ง ที่สำคัญวิตามินดียังช่วยต้านไวรัส เช่น Covid-19 ได้อีกด้วย ส่วนอาหารที่อุดมไปด้วยวิตามินดี ได้แก่ ปลาแซลมอน ปลาทูน่า ปลาซาร์ดีน ไข่แดง ตับ หรือ น้ำมันตับปลา เป็นต้น',
      img: 'https://www.organicbook.com/wp-content/uploads/2021/01/วิตามินและแร่ธาตุที่สำคัญ-ช่วยเพิ่มภูมิคุ้มกันในร่างกาย2-1024x682.jpg',
      // img: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
