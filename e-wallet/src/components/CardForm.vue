<template>
    <div class="new__card">
        <Card v-bind:card="newCard">
            <p>{{ cardNumber }}</p>
        </Card>
        <form>
            <div id="card__number__input">
                <label>Card number</label>
                <input 
                    class="cardNumberInput" 
                    type="text"
                    v-model.number="newCard.cardNumberInput"
                    name="cardNumberInput"
                    placeholder="xxxx xxxx xxxx xxxx"
                    required
                />
            </div>
            <div id="card__name">
                <label>Cardholder name</label>
                <input 
                    class="cardName" 
                    type="text"
                    v-model.trim="newCard.cardName"
                    name="cardName" 
                    placeholder="FIRSTNAME LASTNAME"
                    required
                />
            </div>
            <div id="card__valid">
                <label>Valid thru</label>
                <input 
                    class="cardValid" 
                    type="text"
                    v-model.number="newCard.cardValid"
                    name="cardValid"
                    placeholder="MM/YY"
                    required
                />
            </div>
            <div id="card__CCV">
                <label>CCV</label>
                <input 
                    class="cardCCV" 
                    type="text" 
                    v-model.number="newCard.cardCCV"
                    name="cardCCV"
                    placeholder="xxx"
                    required
                />
            </div>
            <div id="card__vendor">
                <label>card vendor</label>
                <select class="cardVendor" required>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="evil">Evil Corp</option>
                    <option value="ninja">Ninja</option>
                    <option value="blockchain">Block Chain</option>
                </select>
            </div>
        </form>
        <section>
            <button class="addButton" v-on:click="createCard">Add card</button>
        </section>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
    name: 'CardForm',
    components: {
        Card
    },
    data: () => {
        return {
            newCard: {
                cardNumberInput: "",
                cardName: "",
                cardValid: "",
                cardCCV: "",
                cardVendor: "Bitcoin"
            }
        }
    },
    methods: {
        createCard() {
            const newCard = {
                cardNumberInput: this.newCard.cardNumberInput,
                cardName: this.newCard.cardName,
                cardValid: this.newCard.cardValid,
                cardCCV: this.newCard.cardCCV,
                cardVendor: this.newCard.cardVendor
            };
            console.log(newCard);

            // this.$emit("newCard", cards)
            this.$router.push("/");
        }
    }
}
</script>

<style>

</style>