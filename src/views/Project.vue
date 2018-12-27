<template>
  <div class="project">
    <div class="project_detail">
      <div class="brand_icon">
        <img
          src="https://cdn-ak.f.st-hatena.com/images/fotolife/S/SikisimaHisayuki/20170905/20170905123623.jpg"
          alt="icon"
        >
      </div>
      <h2 class="project_title">{{ project_info.project_name }}</h2>
      <div class="project_photos_grid">
        <div class="grid_item">
          <img
            class="grid_image"
            src="https://www.patagonia.jp/static/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw9e053212/images/content/companyInfo/1105x622_davis_t_1306.jpg"
            alt
          >
        </div>
        <div class="grid_item">
          <img
            class="grid_image"
            src="https://www.patagonia.jp/static/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw2c59681f/images/sport-pages/f18-snow/yoder-cap-kit.jpg"
            alt
          >
        </div>
        <div class="grid_item">
          <img
            class="grid_image"
            src="https://www.ei-publishing.co.jp/wp/wp-content/uploads/2017/07/20025036/01_SAT.jpg"
            alt
          >
        </div>
        <div class="grid_item">
          <img
            class="grid_image"
            src="https://www.patagonia.jp/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw2d90660a/images/hi-res/25921_SMDB.jpg?sw=750&sh=750&sm=fit&sfrm=png"
            alt
          >
        </div>
      </div>
      <a class="photo_continue_btn" href>Read more</a>
      <div class="project_caption">
        <p>
          パタゴニアは、自分たちや仲間たちのクライミング・ギアを作る小さな会社として出発しました。現在もアルピニズムを企業理念の中心として、クライミング、スキー、スノーボード、サーフィン、フライフィッシング、パドリング、そしてトレイルランニングを楽しむ人たちのためのウェアを作っています。機械的な動力も観衆の声援も要しないこれらのスポーツは、どれも私たちと自然とのあいだにある架空の境界を取りはらい、「自然と一体となる瞬間」という得がたい恩恵を与えてくれます。
          私たちが作る製品は、クライマーとサーファーが集まってスタートしたビジネスと彼らが推進したミニマリストのスタイルを反映して、シンプルさと実用性に徹したデザインを追求しています。
          パタゴニアで働く私たちの心にある、手つかずの自然が残る美しい土地に対する情熱。それはまた、野生地域を保護する情熱と直結しています。野生のままの姿を留める土地や水域を守り、急速に悪化している地球環境の現状を逆行させるための活動を続けるために、米国内外で草の根環境保護活動をおこなう何百もの団体に、パタゴニアは時間と労力、さらに毎年売上の１％以上の寄付を行っています。
          私たちのビジネスも、店内の照明から製品の生地の染色に至るまで、何らかの形で環境に影響を与えています。私たちはできる限りリサイクル・ポリエステルを使用したり、農薬を大量に使って栽培される通常のコットンではなく、オーガニックコットンのみを使用するなど、環境に与える不必要な悪影響を最小限に抑えるために、たゆまぬ努力を続けています。
          ビジネスを営んできたこの30数年間、私たちは本質的な価値観を忠実に守りつづけながら、パタゴニアという誇るべき会社を築いてきました。そして、つねに最善を尽くしてクォリティの高い製品を作る姿勢が、市場での成功へと繋がってきたのです。
        </p>
      </div>
      <a class="caption_continue_btn" href>Read more</a>
    </div>
    <div class="project_product">
      <div class="product_picture">
        <img
          src="https://www.patagonia.jp/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw2d90660a/images/hi-res/25921_SMDB.jpg?sw=750&sh=750&sm=fit&sfrm=png"
          alt="商品写真"
        >
      </div>
      <div class="product_name">
        <h3>メンズ・ロス・ガトス・フーディ</h3>
      </div>
      <div class="product_price">
        <p>¥16,000-</p>
      </div>
      <div class="product_cost">
        <p>製造原価 ¥8,000-</p>
      </div>
      <div class="product_caption">
        <p>
          身頃はハイパイルのポリエステル・フリース（リサイクル・ポリエステル30％）、サイドパネルは微量のポリウレタンで伸縮性をもたせ、フリースの裏地を付けたポリエステル・ジャージーを使用
          襟の上まで施したフルレングスのフロントジッパーはクライミング・ロープ風のプルタブ付き
          ジッパー式ハンドウォーマーポケット付き
          ヒップまでの丈
          442 g (15.6 oz)
        </p>
      </div>
      <div class="choice">
        <p>商品代金の10%で</p>
        <input type="radio" name="test" id="social" value="社会貢献団体を応援" v-model="picked">
        <label for="support">社会貢献団体を応援</label>
        <br>
        <input type="radio" name="test" id="support" value="プロジェクトを応援" v-model="picked">
        <label for="support">このブランドを応援</label>
        <br>
        <input type="radio" name="test" id="discount" value="商品を割引き" v-model="picked">
        <label for="discount">商品を割引き</label>
        <br>
        <!-- pick: {{ picked }} -->
      </div>
      <div class="buy_btn">
        <button>購入する</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  /* 
  見えない状態
  heigt:xxx px;
  overflow:hidden;

  見える状態
  height: auto;
  overflow: visible;
  */
  data() {
    return {
      project_info: null,
      picked: ""
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/api/project_view/1.json")
      .then(response => (this.project_info = response.data));
  }
};
</script>

<style scoped>
.project {
  padding-top: 50px;
  margin: 5px;
}

.brand_icon {
  margin: 10px auto;
}

.brand_icon img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

.project_detail {
}

.project_title {
  width: 96%;
  margin: 0 auto;
  font-size: 18px;
}

/* .project_photos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  row-gap: 5px;
  margin: 5px;
}

.photo {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  border: solid 1px #efefef;
}

.photo img {
  width: 100%;
} */

.project_photos_grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  row-gap: 5px;
  margin: 5px;
}

.grid_item {
  font-size: 12px;
  margin: 0 auto;
  width: 100%;
  border: solid 1px #efefef;
}

.image_area {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid_image {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.photo_continue_btn {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  color: #333;
  width: 95%;
  margin: 0 auto;
}

.caption_continue_btn {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  color: #333;
  width: 95%;
  margin: 0 auto;
}

.project_caption {
  padding: 10px;
  text-align: left;
  font-size: 14px;
  height: 150px;
  overflow: hidden;
}

.project_product {
  justify-content: center;
  align-items: center;
}

.product_picture {
  margin-top: 20px;
  font-size: 12px;
}

.product_picture img {
  width: 90%;
}

.product_price {
  font-size: 20px;
}

.product_cost {
  font-size: 15px;
}

.product_caption {
  margin: 10px;
  font-size: 12px;
}

.buy_btn {
  width: 80%;
  margin: 0 auto;
  font-weight: bold;
  border: 2px solid #434a54;
  border-radius: 5px;
  font-size: 12px;
  display: block;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  color: #333;
  background: rgb(253, 188, 66);
}
</style>

