<style scoped>
.btn {
  background-color: blueviolet;
  color: white;
  border-color: blueviolet;
}

.group {
  position: relative;
  margin-bottom: 45px;
}
input {
  font-size: 20px;
  padding: 12px 10px 10px 5px;
  display: block;
  width: 389px;
  border: none;
  border-bottom: 2px solid #757575;
  margin: 50px auto;
}
input:focus {
  outline: none;
}
</style>
<template>
  <form @submit.prevent="handelSubmit">
    <div>
      <input
        type="text"
        class="form-control"
        id="email"
        placeholder="Email"
        v-model="form2.email"
      />
    </div>

    <div>
      <input
        type="text"
        class="form-control"
        id="employer"
        placeholder="employer"
        v-model="form2.employer"
      />
    </div>

    <div>
      <input
        type="text"
        class="form-control"
        id="cnss"
        placeholder="cnss"
        v-model="form2.cnss"
      />
    </div>

    <div>
      <input
        type="text"
        class="form-control"
        id="work-address"
        placeholder="Work Address"
        v-model="form2.workAddress"
      />
    </div>

    <div>
      <input
        type="text"
        class="form-control"
        id="city"
        placeholder="City"
        v-model="form2.city"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "ProInfo",
  data() {
    return {
      form2: {
        email: "",
        employer: "",
        cnss: "",
        workAddress: "",
        city: "",
      },
    };
  },
  methods: {
    handelSubmit() {
      localStorage.setItem("form2", JSON.stringify(this.form2));
    },
  },
};
</script>
