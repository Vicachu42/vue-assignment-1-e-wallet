<template>
    <div>
        <form>
            <div id="card__number">
                <label>Card number</label>
                <input class="cardNumber" type="text" />
            </div>
            <div>
                <label>Cardholder name</label>
                <input type="text" />
            </div>
            <div id="card__valid">
                <label>Valid thru</label>
                <input class="cardValid" type="text" />
            </div>
            <div id="card__CCV">
                <label>CCV</label>
                <input class="cardCCV" type="text" />
            </div>
            <div id="card__vendor">
                <label>card vendor</label>
                <input type="text">
                <select name="vendors" id="vendors">
                    <option value="bitcoin">Bitcoin</option>
                    <option value="evil">Evil Corp</option>
                    <option value="ninja">Ninja</option>
                    <option value="blockchain">Block Chain</option>
                </select>
            </div>
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
    name: 'NewCard',
    data() {
        return {
            cardNumber: "xxxx xxxx xxxx xxxx"
        }
    }
}
</script>

<style>

</style>