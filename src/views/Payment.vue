<template>
  <div class="payment_form">
    <div class="payment_form_detail">
      <h2 class="title">購入手続き</h2>
      <div>
        <form action>
          <div class="area">
            <div class="posted_colum">
              <div class="label">
                <label>名前</label>
              </div>
              <div class="write">
                <input v-model="name" type="text" name id placeholder="山田 太郎">
              </div>
            </div>

            <div class="posted_colum">
              <div class="label">
                <label>フリガナ</label>
              </div>
              <div class="write">
                <input v-model="name" type="text" name id placeholder="ヤマダ タロウ">
              </div>
            </div>
          </div>

          <div class="area">
            <div class="posted_colum">
              <div class="label">
                <label>郵便番号</label>
              </div>
              <div class="write">
                <input v-model="name" type="text" name id placeholder="8611211">
              </div>
            </div>

            <div class="posted_colum">
              <div class="label">
                <label>都道府県</label>
              </div>
              <div class="write">
                <input v-model="name" type="text" name id placeholder="福岡県">
              </div>
            </div>

            <div class="posted_colum">
              <div class="label">
                <label>市町村</label>
              </div>
              <div class="write">
                <input v-model="name" type="text" name id placeholder="福岡市中央区">
              </div>
            </div>

            <div class="posted_colum">
              <div class="label">
                <label>番地</label>
              </div>
              <div class="write">
                <input v-model="name" type="text" name id placeholder="大名1-1-1">
              </div>
            </div>

            <div class="posted_colum">
              <div class="label">
                <label>建物名（任意）</label>
              </div>
              <div class="write">
                <input v-model="name" type="text" name id placeholder="大名ビル101">
              </div>
            </div>
          </div>

          <div class="area">
            <div class="posted_colum">
              <div class="label">
                <label>電話番号</label>
              </div>
              <div class="write">
                <input v-model="name" type="text" name id placeholder="09011112222">
              </div>
            </div>

            <div class="posted_colum">
              <div class="label">
                <label>メールアドレス</label>
              </div>
              <div class="write">
                <input v-model="name" type="mail" name id placeholder="gsacademy@gmail.com">
              </div>
            </div>
          </div>

          <div class="area">
            <div class="posted_colum">
              <div class="label">
                <label>決済方法</label>
              </div>
              <div class="cp_ipselect cp_sl01">
                <select required>
                  <option value hidden>選択</option>
                  <option>クレジットカード</option>
                  <option>コンビニ支払い</option>
                </select>
              </div>
            </div>
          </div>
        </form>

        <div class="buy_btn">
          <router-link to="/thankyou">購入する</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.payment_form {
  padding-top: 50px;
  margin: 5px;
}

.title {
  width: 96%;
  margin: 0 auto;
  font-size: 18px;
}

.area {
  margin: 2em;
  background-color: #eeeeee;
  padding-bottom: 5px;
  border-radius: 5px;
}

/* .posted_column {
  margin-top: 10px;
} */

.write input {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
  color: #333;
  width: 95%;
  margin: 0 auto;
}

.cp_ipselect {
  overflow: hidden;
  width: 95%;
  margin: 0 auto;
  text-align: center;
}
.cp_ipselect select {
  width: 100%;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background: transparent;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
}
.cp_ipselect select::-ms-expand {
  display: none;
}
.cp_ipselect.cp_sl01 {
  position: relative;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  background: #ffffff;
}
.cp_ipselect.cp_sl01::before {
  position: absolute;
  top: 0.8em;
  right: 0.9em;
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #666666;
  pointer-events: none;
}
.cp_ipselect.cp_sl01 select {
  padding: 8px 38px 8px 8px;
  color: #666666;
  font-weight: bold;
}

.buy_btn {
  width: 80%;
  margin: 0 auto 20px;
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
  font-size: 15px;
}
</style>


