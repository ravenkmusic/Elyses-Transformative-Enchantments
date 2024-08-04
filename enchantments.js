// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
    const doubleArray = deck.map((value) => value * 2);
    return doubleArray;
  }
  
  /**
   *  Creates triplicates of every 3 found in the deck.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with triplicate 3s
   */
  export function threeOfEachThree(deck) {
    let triplicateDeck = [];
    deck.reduce((accumulator, currentValue) => {
      if (currentValue === 3){
        triplicateDeck.push(3, 3, 3);
      } else {
        triplicateDeck.push(currentValue);
      }
    },
    [],
  );
    return triplicateDeck;
  }
  
  /**
   * Extracts the middle two cards from a deck.
   * Assumes a deck is always 10 cards.
   *
   * @param {number[]} deck of 10 cards
   *
   * @returns {number[]} deck with only two middle cards
   */
  export function middleTwo(deck) {
    let twoMiddleCards = deck.slice(4, 6);
    return twoMiddleCards;
  }
  
  /**
   * Moves the outside two cards to the middle.
   *
   * @param {number[]} deck with even number of cards
   *
   * @returns {number[]} transformed deck
   */
  
  export function sandwichTrick(deck) {
    let topCard = deck.shift();
    let bottomCard = deck.pop();
    let middleofDeck = deck.length / 2;
    deck.splice(middleofDeck, 0, bottomCard, topCard);
    return deck;
  }
  
  /**
   * Removes every card from the deck except 2s.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with only 2s
   */
  export function twoIsSpecial(deck) {
    const onlyTwos = deck.filter((value) => value === 2);
    return onlyTwos;
  }  
  
  /**
   * Returns a perfectly order deck from lowest to highest.
   *
   * @param {number[]} deck shuffled deck
   *
   * @returns {number[]} ordered deck
   */
  export function perfectlyOrdered(deck) {
    const sortedDeck = deck.sort((value1, value2) =>{
      if(value1 < value2){
        return -1;
      }
      if (value1 > value2){
        return 1;
      }
      return 0;
    });
    return sortedDeck;
  }
  
  /**
   * Reorders the deck so that the top card ends up at the bottom.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} reordered deck
   */
  export function reorder(deck) {
    throw new Error('Implement the reorder function');
  }  