<template>
    <div class="container">
        <h1 style="margin: 25px;text-transform:uppercase">Items</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Item Name</td>
                <td>Item Price</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item._id">
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link>
                        <button style="margin-left:10px" class="btn btn-danger"  v-on:click="deleteItem(item._id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                items:[]
            }
        },

        created: function()
        {
            this.fetchItems();
        },
        computed: function () {
            this.deleteItem()
        },

        methods: {
            fetchItems()
            {
                let uri = 'http://192.168.1.10:7598/item';
                this.axios.get(uri).then((response) => {
                    this.items = response.data.data;
                    console.log(response.data.data);
                    // console.log(response.data.data[0]._id, response.data.data[0].indexOf());
                });
            },
            deleteItem(id)
            {
                let uri = 'http://192.168.1.10:7598/item/'+id;
                this.items.splice(this.items.indexOf(id), 1);
                this.axios.delete(uri);
                console.log(this.items.indexOf(id))
            }
        }
    }
</script>