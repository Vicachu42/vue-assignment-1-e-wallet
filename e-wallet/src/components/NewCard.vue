<template>
    <div>
        <h1>Testing</h1>
        <form>
            <label>Card number</label>
            <input type="text" />
            <label>Cardholder name</label>
            <input type="text" />
            <label>Valid thru</label>
            <input type="text" />
            <label>CCV</label>
            <input type="text" />
            <label>card vendor</label>
            <input type="text">
            <select name="vendors" id="vendors">
                <option value="bitcoin">Bitcoin</option>
                <option value="evil">Evil Corp</option>
                <option value="ninja">Ninja</option>
                <option value="blockchain">Block Chain</option>
            </select>
        </form>
        <!-- <form class="inputForm">
            <label>Card number</label>
            <input type="text" v-model="newCard.cardNumber" />
            <label>Cardholder name</label>
            <input type="text" v-model="newCard.cardHolder" />
            <label>Valid thru</label>
            <input type="text" v-model="newCard.valid" />
            <label>CCV</label>
            <input type="text" v-model="newCard.CCV" />
            <label>Card vendor</label>
            <input type="text" v-model="newCard.vendor" />
            <select id="vendors">
                <option value="bitcoin">Bitcoin</option>
                <option value="evil">Evil Corp</option>
                <option value="ninja">Ninja</option>
                <option value="blockchain">Block Chain</option>
            </select>
        </form> -->
    </div>
</template>

<script>
export default {
    name: 'NewCard'
}
</script>

<style>

</style>