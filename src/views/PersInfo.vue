
<style scoped>
.btn {
  background-color: blueviolet;
  color: white;
  border-color: blueviolet;;
  }


input 				{
  font-size: 20px;
    padding: 12px 10px 10px 5px;
    display: block;
    width: 389px;
    border: none;
    border-bottom: 2px solid #757575;
    margin: 50px auto;
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */

/* active state */
/* input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#5264AE;
} */
</style>
<template>

  <form @submit.prevent="handelSubmit">
    <div>
      <input
        type="text"
        id="name"
        v-model="form1.name"
        placeholder="Nom Complet " />
    </div>

    <div>
      <input
        type="text"
        id="phone"
        v-model="form1.phone"
        placeholder="Phone"
      />
    </div>

    <div >
      <input
        type="text"
        class="form-control"
        id="cin"
        v-model="form1.cin"
        placeholder="CIN"
      />
    </div>

    <div class="form-group">
      <input
        type="text"
        id="image"
        v-model="form1.image"
        placeholder="Image"
      />
    </div>

    <div >
      <input
        type="text"
        id="adresse"
        v-model="form1.address"
        placeholder="Address"
      />
    </div>

    <div >
      <input
        type="text"
        id="city"
        v-model="form1.city"
        placeholder="City"
      />
    </div>

    <button type="submit" class="btn" >Submit</button>
  </form>
</template>

<script>
export default {
  name: "PersInfo",
  data() {
    return {

      form1: {

      name: "",
      phone: "",
      cin: "",
      image: "",
      address: "",
      city: "",

      }

     
    };
  },
  methods : {
    handelSubmit(){
       localStorage.setItem('form1',JSON.stringify(this.form1));
       redirect('/ProInfo')
    }
  }
};
</script>
