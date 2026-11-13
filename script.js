    const profiles = {
      DGA: { name: "นักสร้างโลกและตัวละคร", result: "คุณเริ่มต้นจากจินตนาการ มองเห็นผู้คน เรื่องราว และโลกที่ยังไม่มีใครวาดขึ้นมา แล้วทำให้สิ่งเหล่านั้นมีรูปร่างที่คนอื่นเข้าไปพบเจอได้" },
      DGD: { name: "นักออกแบบอัตลักษณ์", result: "คุณมองเห็นความหมายที่ซ่อนอยู่ในภาพและรายละเอียด แล้วจัดวางมันให้กลายเป็นภาษาที่ชัดเจน จดจำได้ และเชื่อมโยงผู้คนเข้ากับสถานที่" },
      IGD: { name: "นักออกแบบประสบการณ์", result: "คุณชอบตั้งคำถามกับกติกาและความเป็นไปได้ เปลี่ยนความคิดให้เป็นระบบที่ผู้คนได้ลอง ได้ค้นพบ และมีส่วนร่วมด้วยตัวเอง" },
      AFX: { name: "นักสร้างภาพเคลื่อนไหว", result: "คุณมองเห็นภาพที่ยังไม่เกิดขึ้นจริง และใช้จังหวะ การเคลื่อนไหว และเทคโนโลยีพามันออกมาปรากฏต่อสายตาผู้คน" },
      DEN: { name: "นักเชื่อมผู้คน", result: "คุณเชื่อว่างานจะมีชีวิตเมื่อผู้คนได้มาพบกัน รับฟังกัน และลงมือสร้างบางสิ่งร่วมกัน จนความทรงจำกลายเป็นของทุกคน" }
    };

    const colorStages = [
      { hex: "#777982", rgb: "119, 121, 130" },
      { hex: "#7751c7", rgb: "119, 81, 199" },
      { hex: "#4265c7", rgb: "66, 101, 199" },
      { hex: "#147f88", rgb: "20, 127, 136" },
      { hex: "#8b6817", rgb: "139, 104, 23" }
    ];
    const artworkColors = ["#7751c7", "#4265c7", "#147f88", "#c49b3b"];
    const scoreColors = { DGA: "#7751c7", DGD: "#4265c7", IGD: "#147f88", AFX: "#a27a20", DEN: "#6e59a7" };

    const choices = {
      create: [
        ["DGA", "หยิบพู่กันขึ้นมาวาดภาพจากสิ่งที่จินตนาการไว้"],
        ["DGD", "ออกแบบภาพและตัวอักษรให้สื่อสารเรื่องราวของนคร"],
        ["IGD", "ค้นหากติกาบางอย่างเพื่อให้ผืนผ้าใบโต้ตอบกับผู้ชมได้"],
        ["AFX", "ทดลองทำให้ภาพบนผืนผ้าใบเคลื่อนไหวและมีชีวิต"],
        ["DEN", "ชวนผู้คนรอบข้างมาร่วมกันสร้างผลงานชิ้นนี้"]
      ],
      tool: [
        ["DGA", "สมุดสเก็ตช์ที่สามารถวาดอะไรก็ได้ลงไป"],
        ["DGD", "ชุดตัวอักษรและรูปทรงสำหรับจัดวางเป็นงานออกแบบ"],
        ["IGD", "กล่องปริศนาที่มีกลไกและกติกาซ่อนอยู่"],
        ["AFX", "กล้องบันทึกภาพที่สามารถเก็บภาพเคลื่อนไหวได้"],
        ["DEN", "ไมโครโฟนที่ส่งเสียงไปถึงผู้ชมได้ทั่วนคร"]
      ],
      room: [
        ["DGA", "ห้องที่เต็มไปด้วยภาพวาด ตัวละคร และโลกเหนือจินตนาการ"],
        ["DGD", "ห้องที่เต็มไปด้วยโปสเตอร์ โลโก้ และงานจัดวางตัวอักษร"],
        ["IGD", "ห้องที่เต็มไปด้วยเกม ปริศนา และกลไกที่ทดลองเล่นได้"],
        ["AFX", "ห้องที่เต็มไปด้วยภาพยนตร์ ตัวละครเคลื่อนไหว และเอฟเฟกต์"],
        ["DEN", "ห้องที่เต็มไปด้วยเพลง เวที และการแสดงของผู้คน"]
      ],
      bridge: [
        ["DGA", "วาดสะพานขึ้นใหม่ด้วยรูปทรงและจินตนาการ"],
        ["DGD", "ออกแบบป้ายเตือนและเส้นทางใหม่ให้เข้าใจง่าย"],
        ["IGD", "ซ่อมกลไกของสะพานให้กลับมาใช้งานได้"],
        ["AFX", "สร้างภาพจำลองให้เห็นสะพานค่อย ๆ ประกอบตัวเองขึ้นใหม่"],
        ["DEN", "ชวนผู้ชมมาช่วยกันซ่อมและจัดกิจกรรมร่วมกัน"]
      ],
      character: [
        ["DGA", "วาดตัวละครตัวนั้นขึ้นมาใหม่"],
        ["DGD", "ออกแบบโปสเตอร์และสติกเกอร์ให้เด็กเก็บไว้"],
        ["IGD", "สร้างเกมเล็ก ๆ ให้เด็กออกตามหาตัวละคร"],
        ["DEN", "ชวนเด็กคนอื่นมาฟังเรื่องราวและสร้างความทรงจำไปด้วยกัน"]
      ],
      shop: [
        ["DGA", "วาดภาพประกอบและสร้างเอกลักษณ์เฉพาะตัวให้ร้าน"],
        ["DGD", "ออกแบบแบรนด์ใหม่ ตั้งแต่โลโก้ ป้าย ไปจนถึงบรรจุภัณฑ์"],
        ["IGD", "เปลี่ยนการเข้าชมร้านให้กลายเป็นประสบการณ์แบบเกม"],
        ["AFX", "ทำวิดีโอแนะนำร้านด้วยภาพเคลื่อนไหวและเอฟเฟกต์"],
        ["DEN", "จัดกิจกรรมและประชาสัมพันธ์ให้ผู้คนกลับมาสนใจร้านอีกครั้ง"]
      ],
      team: [
        ["DGA", "ช่วยวาดภาพร่างให้ทุกคนเห็นภาพผลงานเดียวกัน"],
        ["DGD", "จัดทำแนวทาง สี และองค์ประกอบให้ทุกอย่างไปในทิศทางเดียวกัน"],
        ["IGD", "คิดกิจกรรมหรือระบบให้ทุกคนทำงานร่วมกันได้อย่างสนุก"],
        ["AFX", "สร้างตัวอย่างภาพเคลื่อนไหวสั้น ๆ ให้เห็นผลงานจริง"],
        ["DEN", "รับฟังทุกคนและช่วยให้ทีมทำงานร่วมกันได้อย่างราบรื่น"]
      ],
      finalWork: [
        ["DGA", "ภาพวาดขนาดใหญ่ที่ถ่ายทอดจินตนาการของนคร"],
        ["DGD", "ภาพลักษณ์และเอกลักษณ์ใหม่ของเมืองที่ทุกคนจดจำได้"],
        ["IGD", "ภาพเคลื่อนไหวและเอฟเฟกต์ที่ทำให้ผู้ชมตื่นตา"],
        ["AFX", "เกมที่ผู้คนทั้งนครสามารถเข้าร่วมเล่นกันได้"],
        ["DEN", "การแสดงสดที่ทุกคนสามารถมีส่วนร่วมได้"]
      ],
      legacy: [
        ["DGD", "คนที่สร้างเอกลักษณ์และทำให้นครมีภาพจำเป็นของตัวเอง"],
        ["DGA", "คนที่ให้กำเนิดตัวละครและโลกที่ทุกคนหลงรัก"],
        ["IGD", "คนที่ทำให้สิ่งที่เป็นไปไม่ได้กลายเป็นภาพที่เกิดขึ้นได้จริง"],
        ["AFX", "คนที่สร้างโลกให้ทุกคนเข้ามาเล่นและมีส่วนร่วม"],
        ["DEN", "คนที่ทำให้ผู้คนกลับมารวมตัวและมีความสุขร่วมกัน"]
      ]
    };

    const scenes = [
      { type: "cover", chapter: "บทนำ", title: "นิทรรศการ\nเที่ยวสุดท้าย", body: "นครศิลป์กำลังจะหลับใหล\nคุณมีเวลาเพียงหนึ่งคืนที่จะทำให้มันกลับมามีชีวิตอีกครั้ง", button: "ก้าวเข้านิทรรศการ" },
      { type: "story", chapter: "01 / เมืองที่เคยมีสีสัน", title: "ทุกอาคารมีเรื่องราว", body: "ณ เมืองนครศิลป์ เคยเป็นเมืองที่เต็มไปด้วยสีสัน ทุกอาคารมีเรื่องราว ทุกถนนมีเอกลักษณ์ และทุกคนต่างมีความคิดสร้างสรรค์\n\nแต่อยู่มาวันหนึ่ง สีสันของเมืองกลับเลือนหาย วิจิตรศิลป์หวนสู่ความเงียบงัน ไร้เสียงเพลงที่บรรเลง ผู้คนเริ่มลืมเลือนแม้แต่ความฝัน", button: "อ่านบัตรเชิญ", art: "city" },
      { type: "story", chapter: "02 / บัตรเชิญ", title: "ก่อนทุกอย่างจะหายไป", body: "ก่อนที่นครแห่งนี้จะสูญสิ้นศิลปะไปตลอดกาล มีบัตรเชิญถูกส่งมาถึงคุณ\n\nเมื่อเดินทางมาถึง คุณพบผู้ดูแลนิทรรศการตัวเล็ก ๆ ในรูปของดวงไฟ", button: "พบผู้ดูแล", art: "invitation" },
      { type: "story", chapter: "03 / คำถามแรก", title: "หนึ่งคืนสุดท้าย", body: "“ยินดีต้อนรับ เหลือเวลาอีกเพียงหนึ่งคืนก่อนนิทรรศการนครศิลป์จะปิดลง แต่ก่อนจะไปถึงผลงานชิ้นสุดท้าย ฉันอยากรู้ว่าคุณมองโลกใบนี้เป็นอย่างไร”", button: "เดินต่อ", art: "light" },
      { type: "story", chapter: "04 / ห้องจัดแสดง", title: "ผืนผ้าใบที่ยังว่างเปล่า", body: "คุณเดินเข้ามาในห้องจัดแสดงแห่งแรก มีผืนผ้าใบขนาดใหญ่วางอยู่กลางห้อง ไม่มีร่องรอยของสีแม้แต่นิดเดียว", button: "เข้าใกล้ผืนผ้าใบ", art: "canvas" },
      { type: "choice", chapter: "05 / จุดเริ่มต้น", prompt: "ถ้าคุณสามารถเริ่มต้นสร้างบางสิ่งให้กับนครนี้ได้ คุณจะเริ่มจากอะไร?", options: choices.create, echo: "ประกายแรก" },
      { type: "echo", chapter: "06 / ร่องรอยแรก", title: "ความคิดเริ่มปรากฏ", body: "แนวคิดแรกทิ้งร่องรอยไว้บนผืนผ้าใบที่เคยว่างเปล่า", button: "ดูสิ่งที่รออยู่", art: "canvas" },
      { type: "story", chapter: "07 / ของติดตัว", title: "ห้าช่องว่าง", body: "ภายในตู้จัดแสดงมีช่องว่างอยู่ห้าช่อง ดวงไฟบอกว่าคุณสามารถเลือกสิ่งของได้เพียงหนึ่งชิ้น เพื่อนำติดตัวไปตลอดทาง", button: "เปิดตู้จัดแสดง", art: "cabinet" },
      { type: "choice", chapter: "08 / ของติดตัว", prompt: "สิ่งไหนที่คุณคิดว่ามีประโยชน์ที่สุดในการสร้างผลงานของตัวเอง?", options: choices.tool, echo: "สิ่งของที่เลือก", keepsake: true },
      { type: "echo", chapter: "09 / ของที่เลือก", title: "สิ่งหนึ่งที่คุณพกไป", body: "ของชิ้นนั้นจะอยู่กับคุณตลอดการเดินทาง", button: "ไปยังโถงกลาง", art: "cabinet" },
      { type: "story", chapter: "10 / ประตูห้าบาน", title: "แต่ละห้องมีเสียงของตัวเอง", body: "คุณเดินทางมาถึงโถงกลางของนิทรรศการ ที่นี่มีประตูอยู่ห้าบาน แต่ละบานมีบรรยากาศและเสียงที่แตกต่างกัน", button: "ฟังเสียงจากอีกฝั่ง", art: "doors" },
      { type: "choice", chapter: "11 / ประตูที่เลือก", prompt: "ถ้าต้องเลือกเข้าชมห้องหนึ่งก่อน คุณจะเลือกห้องไหน?", options: choices.room, echo: "ประตูที่เปิด" },
      { type: "echo", chapter: "12 / ห้องที่เลือก", title: "เสียงหนึ่งดังชัดขึ้น", body: "หลังประตูที่คุณเลือก มีโลกใบหนึ่งรอให้ค้นพบ", button: "ออกจากห้อง", art: "doors" },
      { type: "story", chapter: "13 / สะพานขาด", title: "อีกฝั่งยังรออยู่", body: "คุณเดินผ่านประตูมาและพบว่าสะพานจัดแสดงที่เชื่อมห้องทั้งสองพังลง ผู้ชมอีกฝั่งจึงไม่สามารถเดินข้ามมาได้", button: "มองหาทางแก้", art: "bridge" },
      { type: "choice", chapter: "14 / ทางเชื่อม", prompt: "คุณจะทำอย่างไรเพื่อให้ทุกคนกลับมาเข้าชมนิทรรศการได้?", options: choices.bridge, echo: "สะพานกลับมา" },
      { type: "echo", chapter: "15 / สะพานกลับมา", title: "ผู้คนได้พบกันอีกครั้ง", body: "ทางเชื่อมกลับมาเปิด และผู้ชมจากทั้งสองฝั่งเริ่มเดินเข้าหากัน", button: "ข้ามไปอีกฝั่ง", art: "bridge" },
      { type: "story", chapter: "16 / ภาพวาดที่หายไป", title: "ตัวละครตัวโปรด", body: "อีกฝั่งหนึ่ง เด็กคนหนึ่งนั่งร้องไห้อยู่หน้าภาพวาดที่ว่างเปล่า เขาบอกว่าตัวละครสุดโปรดที่เคยอยู่ในนิทรรศการได้หายไปแล้ว", button: "เข้าไปหาเด็กคนนั้น", art: "portrait" },
      { type: "choice", chapter: "17 / สิ่งที่ปลอบโยน", prompt: "คุณจะช่วยให้ตัวละครที่เขารักกลับมาได้อย่างไร?", options: choices.character, echo: "ความทรงจำ" },
      { type: "echo", chapter: "18 / ความทรงจำ", title: "เรื่องราวยังอยู่", body: "เด็กคนนั้นเริ่มยิ้ม เมื่อสิ่งที่รักมีที่ทางในนิทรรศการอีกครั้ง", button: "เดินทางต่อ", art: "portrait" },
      { type: "story", chapter: "19 / ร้านเล็ก ๆ", title: "ไม่มีใครจดจำร้านนี้", body: "ในนิทรรศการที่ว่างเปล่า คุณพบร้านเล็ก ๆ เจ้าของร้านกำลังจะปิดร้าน เพราะไม่มีใครสนใจหรือจดจำร้านแห่งนี้อีกแล้ว", button: "ฟังเจ้าของร้าน", art: "shop" },
      { type: "choice", chapter: "20 / ร้านที่กลับมามีชีวิต", prompt: "ถ้ามีโอกาสช่วยให้ร้านนี้กลับมาเป็นที่จดจำอีกครั้ง คุณจะเสนออะไร?", options: choices.shop, echo: "ร้านแห่งใหม่" },
      { type: "echo", chapter: "21 / ร้านแห่งใหม่", title: "มีคนแวะเข้ามา", body: "ร้านเล็ก ๆ เริ่มมีเรื่องราวที่ผู้คนอยากบอกต่อ", button: "กลับสู่โถงกลาง", art: "shop" },
      { type: "story", chapter: "22 / ทีมสร้างสรรค์", title: "ทำงานร่วมกัน", body: "คุณกลับมายังโถงกลาง พบผู้ร่วมงานอีกสี่คนที่กำลังพยายามสร้างผลงานชิ้นใหญ่เพื่อช่วยนิทรรศการ คุณได้รับเชิญให้เข้าร่วมทีม", button: "เข้าร่วมทีม", art: "team" },
      { type: "choice", chapter: "23 / บทบาทของคุณ", prompt: "คุณคิดว่าตัวเองจะเป็นคนแบบไหนในทีมนี้?", options: choices.team, echo: "บทบาทในทีม" },
      { type: "echo", chapter: "24 / ผลงานร่วมกัน", title: "ชิ้นงานเริ่มเป็นรูปเป็นร่าง", body: "เมื่อแต่ละคนได้ใช้สิ่งที่ถนัด ความคิดที่กระจัดกระจายก็เริ่มเชื่อมต่อกัน", button: "ไปยังห้องสุดท้าย", art: "team" },
      { type: "story", chapter: "25 / ใกล้เที่ยงคืน", title: "คนทั้งนครมารวมตัว", body: "ท้องฟ้าด้านนอกมืดลงเรื่อย ๆ นาฬิกาบอกเวลาใกล้เที่ยงคืน ผู้ร่วมงานทุกคนมารวมตัวกันที่ห้องจัดแสดงใหญ่ที่สุด\n\nตรงกลางมีเวทีขนาดใหญ่ และผืนผ้าใบว่างเปล่ารอให้ใครสักคนมาสร้างผลงานชิ้นสุดท้าย", button: "ก้าวขึ้นบนเวที", art: "stage" },
      { type: "choice", chapter: "26 / ผลงานชิ้นสุดท้าย", prompt: "คุณได้รับโอกาสให้นำเสนอผลงานต่อหน้าทุกคนในนคร คุณอยากนำเสนออะไรให้ทุกคนได้เห็นมากที่สุด?", options: choices.finalWork, echo: "ผลงานชิ้นสุดท้าย" },
      { type: "echo", chapter: "27 / แสงแรก", title: "ผลงานเริ่มเปล่งแสง", body: "สีสันค่อย ๆ กระจายไปทั่วห้องจัดแสดง ผู้คนเริ่มยิ้ม และนครกลับมามีชีวิตอีกครั้ง", button: "ฟังคำถามสุดท้าย", art: "awakening" },
      { type: "choice", chapter: "28 / สิ่งที่อยากให้จดจำ", prompt: "หากวันหนึ่งผู้คนพูดถึงคุณในฐานะคนที่ช่วยคืนสีสันให้นครนี้ คุณอยากให้พวกเขาจดจำคุณในแบบไหน?", options: choices.legacy, echo: "ภาพจำของคุณ" },
      { type: "story", chapter: "29 / วิจิตรศิลป์หวนคืน", title: "นครกลับมามีชีวิต", body: "เมื่อผลงานชิ้นสุดท้ายเสร็จสมบูรณ์ สีสันทั้งหมดกลับคืนสู่นครศิลป์ ภาพวาดที่เคยว่างเปล่าเริ่มมีชีวิต\n\n“การเดินทางที่ผ่านมา สิ่งที่คุณเลือกไม่เพียงช่วยเมืองนี้ แต่มันยังบอกได้ว่าคุณเป็นคนที่มีความคิดสร้างสรรค์แบบไหน”", button: "ดูผลการเดินทาง", art: "awakening" },
      { type: "result", chapter: "บทส่งท้าย" }
    ];

    const state = { index: 0, scores: { DGA: 0, DGD: 0, IGD: 0, AFX: 0, DEN: 0 }, answers: [], keepsake: "" };
    const main = document.querySelector("#main");
    const stepReadout = document.querySelector("#stepReadout");
    const progressValue = document.querySelector("#progressValue");
    const keepsakeLabel = document.querySelector("#keepsake");
    let changing = false;

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);
    }

    function artwork(seed, activeCode = "") {
      const codeOrder = ["DGA", "DGD", "IGD", "AFX", "DEN"];
      const pattern = codeOrder.indexOf(activeCode);
      const progress = (state?.index || 0) / (scenes.length - 1);
      return `<figure class="art-frame"><canvas data-seed="${seed}" data-pattern="${pattern}" data-progress="${progress}" aria-label="ภาพประกอบนิทรรศการที่ค่อย ๆ มีสีสัน"></canvas><figcaption class="art-caption"><span>นครศิลป์ / ภาพบันทึก</span><span>${String(seed + 1).padStart(2, "0")}</span></figcaption></figure>`;
    }

    function layout(copy, art, extraClass = "") {
      return `<section class="scene ${extraClass}" id="scene" aria-labelledby="scene-title"><div class="scene-layout"><div class="scene-copy">${copy}</div>${art}</div></section>`;
    }

    function render() {
      const scene = scenes[state.index];
      const currentAnswer = state.answers.at(-1);
      const chapter = state.index === 0 ? "00" : String(state.index).padStart(2, "0");
      const colorProgress = state.index / (scenes.length - 1);
      const accentIndex = colorProgress === 0 ? 0 : Math.min(colorStages.length - 1, Math.ceil(colorProgress * (colorStages.length - 1)));
      const accent = colorStages[accentIndex];
      document.documentElement.style.setProperty("--accent", accent.hex);
      document.documentElement.style.setProperty("--accent-soft", `rgba(${accent.rgb}, ${.035 + colorProgress * .09})`);
      document.documentElement.style.setProperty("--ambient", `rgba(${accent.rgb}, ${.012 + colorProgress * .12})`);
      stepReadout.innerHTML = `<span>บท</span> ${chapter} <span>/ ${String(scenes.length - 1).padStart(2, "0")}</span>`;
      progressValue.style.width = `${(state.index / (scenes.length - 1)) * 100}%`;
      keepsakeLabel.innerHTML = `สิ่งที่ติดตัว: <b>${state.keepsake ? escapeHtml(state.keepsake) : "ยังไม่มี"}</b>`;

      if (scene.type === "cover") {
        const copy = `<p class="eyebrow">นิทรรศการเชิงโต้ตอบ · 01 คืนที่เหลือ</p><h1 id="scene-title">${escapeHtml(scene.title).replace("\n", "<br>")}</h1><p class="lead">${escapeHtml(scene.body).replace("\n", "<br>")}</p><div class="action-row"><button class="primary-action" data-next>${escapeHtml(scene.button)} <span class="arrow" aria-hidden="true">↗</span></button><span class="subtle-note">ใช้เวลาประมาณ 5 นาที</span></div>`;
        main.innerHTML = layout(copy, artwork(state.index, ""));
      } else if (scene.type === "story") {
        const copy = `<p class="eyebrow">${escapeHtml(scene.chapter)}</p><h2 id="scene-title">${escapeHtml(scene.title)}</h2><p class="narrative">${escapeHtml(scene.body)}</p><button class="primary-action" data-next>${escapeHtml(scene.button)} <span class="arrow" aria-hidden="true">→</span></button>`;
        main.innerHTML = layout(copy, artwork(state.index, currentAnswer?.code || ""));
      } else if (scene.type === "choice") {
        const options = scene.options.map(([code, label], index) => `<li><button class="option" data-choice="${index}" type="button"><span class="option-number">${String(index + 1).padStart(2, "0")}</span><span class="option-label">${escapeHtml(label)}</span></button></li>`).join("");
        const copy = `<p class="eyebrow">${escapeHtml(scene.chapter)}</p><h2 id="scene-title">${escapeHtml(scene.prompt)}</h2><p class="question">ดวงไฟรอฟังคำตอบของคุณ</p><ol class="options">${options}</ol><p class="choice-hint">เลือกคำตอบที่ใกล้กับตัวคุณที่สุด</p>`;
        main.innerHTML = layout(copy, artwork(state.index, ""), "choice-scene");
      } else if (scene.type === "echo") {
        const answer = currentAnswer;
        const descriptor = answer ? profiles[answer.code].result.split("。")[0] + "。" : scene.body;
        const copy = `<p class="eyebrow">${escapeHtml(scene.chapter)}</p><h2 id="scene-title">${escapeHtml(scene.title)}</h2><p class="echo-line">${answer ? `คุณเลือก · ${escapeHtml(answer.label)}` : ""}</p><p class="narrative">${escapeHtml(scene.body)}\n\n${escapeHtml(descriptor)}</p><button class="primary-action" data-next>${escapeHtml(scene.button)} <span class="arrow" aria-hidden="true">→</span></button>`;
        main.innerHTML = layout(copy, artwork(state.index, answer?.code || ""));
      } else {
        renderResult(scene);
      }

      drawCurrentArtwork();
      const section = document.querySelector("#scene");
      requestAnimationFrame(() => section?.classList.add("is-visible"));
      section?.querySelector("h1, h2")?.setAttribute("tabindex", "-1");
    }

    function renderResult(scene) {
      const maximum = Math.max(...Object.values(state.scores));
      const leaders = Object.keys(state.scores).filter(code => state.scores[code] === maximum);
      const winner = leaders.length > 1
        ? (state.answers.slice().reverse().find(answer => leaders.includes(answer.code))?.code || leaders[0])
        : leaders[0];
      const ranking = Object.keys(state.scores).sort((a, b) => state.scores[b] - state.scores[a]);
      const rows = ranking.map(code => `<div class="result-row" style="--score-color:${scoreColors[code]}"><span class="result-code">${escapeHtml(profiles[code].name)}<small>${code}</small></span><div class="bar-track"><div class="bar-fill" data-score="${state.scores[code]}" data-total="${Math.max(1, maximum)}"></div></div><span class="result-count" data-count="${state.scores[code]}">0</span></div>`).join("");
      const recap = state.answers.map((answer, index) => `<div class="recap-item"><span>${String(index + 1).padStart(2, "0")}</span><span><b>${escapeHtml(answer.label)}</b> <span class="recap-code">${answer.code}</span></span></div>`).join("");
      const copy = `<p class="eyebrow">${escapeHtml(scene.chapter)} · ผลการเดินทาง</p><h2 id="scene-title">${escapeHtml(profiles[winner].name)}</h2><p class="result-intro">${escapeHtml(profiles[winner].result)}</p><p class="echo-line">แนวคิดที่ปรากฏบ่อยที่สุด · ${escapeHtml(profiles[winner].name)}</p><div class="result-bars" aria-label="คะแนนแต่ละแนวคิด">${rows}</div><button class="primary-action" data-restart type="button">เริ่มการเดินทางอีกครั้ง <span class="arrow" aria-hidden="true">↻</span></button><details class="recap"><summary>ทบทวนคำตอบทั้ง ${state.answers.length} ข้อ</summary><div class="recap-list">${recap}</div></details><div class="site-foot"><span>นิทรรศการเที่ยวสุดท้าย</span><span>นครศิลป์ · 00:00</span></div>`;
      main.innerHTML = layout(copy, artwork(state.index, winner), "result-layout");
      requestAnimationFrame(() => document.querySelectorAll(".bar-fill").forEach(bar => {
        bar.style.width = `${(Number(bar.dataset.score) / Number(bar.dataset.total)) * 100}%`;
      }));
      document.querySelectorAll(".result-count").forEach((counter, index) => {
        const target = Number(counter.dataset.count);
        const start = performance.now() + index * 80;
        const animate = now => {
          const progress = Math.min(1, (now - start) / 650);
          counter.textContent = String(Math.round(target * Math.max(0, progress)));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      });
    }

    function drawCurrentArtwork() {
      document.querySelectorAll("canvas").forEach(canvas => {
        const rect = canvas.getBoundingClientRect();
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        if (!rect.width || !rect.height) return;
        canvas.width = Math.round(rect.width * ratio);
        canvas.height = Math.round(rect.height * ratio);
        const ctx = canvas.getContext("2d");
        ctx.scale(ratio, ratio);
        const width = rect.width;
        const height = rect.height;
        const seed = Number(canvas.dataset.seed) + 1;
        const pattern = Number(canvas.dataset.pattern);
        const colorProgress = Number(canvas.dataset.progress);
        let value = seed * 7919 + Math.max(0, pattern + 1) * 104729;
        const random = () => { value = (value * 16807) % 2147483647; return (value - 1) / 2147483646; };
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = "rgba(36,36,43,.07)";
        ctx.lineWidth = 1;
        for (let x = 28; x < width; x += 32) { ctx.beginPath(); ctx.moveTo(x, 20); ctx.lineTo(x, height - 20); ctx.stroke(); }
        for (let y = 28; y < height; y += 32) { ctx.beginPath(); ctx.moveTo(20, y); ctx.lineTo(width - 20, y); ctx.stroke(); }
        ctx.strokeStyle = "rgba(36,36,43,.72)";
        ctx.fillStyle = "rgba(36,36,43,.72)";
        ctx.lineWidth = 1.3;
        const cx = width * (.42 + random() * .18);
        const cy = height * (.38 + random() * .2);

        if (pattern === 2) {
          const points = Array.from({ length: 10 }, () => [width * (.15 + random() * .7), height * (.14 + random() * .68)]);
          ctx.globalAlpha = .68;
          for (let i = 0; i < points.length - 1; i++) { ctx.beginPath(); ctx.moveTo(...points[i]); ctx.lineTo(...points[(i + 1 + Math.floor(random() * 3)) % points.length]); ctx.stroke(); }
          ctx.globalAlpha = 1;
          points.forEach(([x, y], i) => { ctx.beginPath(); ctx.arc(x, y, i % 3 === 0 ? 5 : 2.5, 0, Math.PI * 2); ctx.fill(); });
        } else if (pattern === 3) {
          for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.arc(cx, cy, 15 + i * 18, -.4 + i * .35, 2.5 + i * .18); ctx.stroke(); }
          for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.arc(cx + (random() - .5) * 95, cy + (random() - .5) * 95, 2 + i, 0, Math.PI * 2); ctx.fill(); }
        } else if (pattern === 1) {
          ctx.strokeRect(width * .2, height * .2, width * .6, height * .58);
          ctx.strokeRect(width * .27, height * .28, width * .42, height * .25);
          ctx.beginPath(); ctx.moveTo(width * .27, height * .62); ctx.lineTo(width * .7, height * .62); ctx.moveTo(width * .27, height * .68); ctx.lineTo(width * .56, height * .68); ctx.stroke();
          ctx.beginPath(); ctx.arc(width * .75, height * .3, 18, 0, Math.PI * 2); ctx.stroke();
        } else if (pattern === 4) {
          ctx.beginPath(); ctx.moveTo(width * .5, height * .22); ctx.lineTo(width * .5, height * .7); ctx.stroke();
          ctx.beginPath(); ctx.ellipse(width * .5, height * .72, width * .26, height * .07, 0, 0, Math.PI * 2); ctx.stroke();
          for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.arc(width * (.27 + i * .115), height * (.49 + Math.sin(i * 1.3) * .06), 11 + (i % 2) * 5, 0, Math.PI * 2); ctx.stroke(); }
          for (let i = 0; i < 24; i++) { const x = width * (.16 + random() * .68); const y = height * (.76 + random() * .12); ctx.fillRect(x, y, 2, 2); }
        } else {
          for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(width * (.2 + random() * .5), height * (.18 + random() * .6));
            ctx.bezierCurveTo(width * random(), height * random(), width * random(), height * random(), width * (.25 + random() * .6), height * (.2 + random() * .62));
            ctx.stroke();
          }
          for (let i = 0; i < 7; i++) { const x = width * (.17 + random() * .66); const y = height * (.15 + random() * .68); ctx.beginPath(); ctx.arc(x, y, 2 + random() * 5, 0, Math.PI * 2); ctx.fill(); }
        }
        if (colorProgress > 0) {
          ctx.save();
          ctx.globalAlpha = Math.min(1, colorProgress * 1.3);
          const visibleColors = Math.max(1, Math.ceil(colorProgress * artworkColors.length));
          for (let index = 0; index < visibleColors; index++) {
            const angle = seed * .67 + index * Math.PI * .55;
            const orbit = Math.min(width, height) * (.13 + index * .035);
            const x = cx + Math.cos(angle) * orbit;
            const y = cy + Math.sin(angle) * orbit;
            ctx.strokeStyle = artworkColors[index];
            ctx.fillStyle = artworkColors[index];
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(x, y, 10 + index * 5, angle, angle + Math.PI * (1.05 + colorProgress * .35));
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(x, y, 2.5 + index, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
        ctx.fillStyle = "rgba(36,36,43,.62)";
        ctx.font = "10px IBM Plex Sans Thai, sans-serif";
        ctx.fillText("N / 01", 22, height - 24);
      });
    }

    function transition(nextIndex) {
      if (changing || nextIndex < 0 || nextIndex >= scenes.length) return;
      changing = true;
      const section = document.querySelector("#scene");
      section?.classList.remove("is-visible");
      section?.classList.add("is-leaving");
      main.setAttribute("aria-busy", "true");
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.setTimeout(() => {
        state.index = nextIndex;
        render();
      window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
        main.setAttribute("aria-busy", "false");
        changing = false;
        document.querySelector("#scene-title")?.focus({ preventScroll: true });
      }, reducedMotion ? 1 : 350);
    }

    main.addEventListener("click", event => {
      const next = event.target.closest("[data-next]");
      const option = event.target.closest("[data-choice]");
      const restart = event.target.closest("[data-restart]");
      if (next) transition(state.index + 1);
      if (option) {
        if (option.disabled || changing) return;
        const optionList = option.closest(".options");
        optionList.classList.add("has-selection");
        option.classList.add("is-selected");
        option.setAttribute("aria-pressed", "true");
        optionList.querySelectorAll("button").forEach(button => { button.disabled = true; });
        const scene = scenes[state.index];
        const [code, label] = scene.options[Number(option.dataset.choice)];
        state.scores[code] += 1;
        state.answers.push({ code, label, chapter: scene.chapter });
        if (scene.keepsake) state.keepsake = label;
        window.setTimeout(() => transition(state.index + 1), 240);
      }
      if (restart) {
        state.index = 0;
        state.scores = { DGA: 0, DGD: 0, IGD: 0, AFX: 0, DEN: 0 };
        state.answers = [];
        state.keepsake = "";
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.querySelector("#scene-title")?.focus({ preventScroll: true });
      }
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(drawCurrentArtwork, 100);
    });
    render();
