<template>
    <div>
        <!-- <Card v-bind:card="newCard">
            <p>{{ cardNumber }}</p>
        </Card> -->
        <section>
            <form class="new__card">
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
                        class="cardHolder" 
                        type="text"
                        v-model.trim="newCard.cardHolder"
                        name="cardHolder" 
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
                    <label>CCV Number</label>
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
        </section>
        <section>
            <button class="addButton" v-on:click="createCard">Add card</button>
        </section>
    </div>
</template>

<script>
// import Card from './Card.vue'

export default {
    name: 'CardForm',
    // components: {
    //     Card
    // },
    data: () => {
        return {
            newCard: {
                cardNumberInput: "",
                cardHolder: "",
                cardValid: "",
                cardCCV: "",
                cardVendor: ""
            }
        }
    },
    methods: {
        createCard() {
            const newCard = {
                cardNumberInput: this.newCard.cardNumberInput,
                cardHolder: this.newCard.cardHolder,
                cardValid: this.newCard.cardValid,
                cardCCV: this.newCard.cardCCV,
                cardVendor: this.newCard.cardVendor
            };
            console.log(newCard);

            // this.$emit("newCard", cards)
            // this.$emit("add-new-card", newCard)
            // this.cards.push(newCard);

            this.$router.push("/");
        }
    }
}
</script>

<style>
#card__number__input {
    grid-area: card__number__input;
}

#card__name {
    grid-area: card__name;
}

#card__valid {
    grid-area: card__valid
}

#card__CCV {
    grid-area: card__CCV;
}

#card__vendor {
    grid-area: card__vendor;
}
</style>