import { createStore } from 'vuex';

export default createStore({
  state: {
    roomName: 'No selected room jet',
    reservationDateFrom: new Date(),
    reservationDateUntil: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    adults: '2',
    children: '2',
    roomPrice: 'No price jet',
  },
  mutations: {
    setRerservation(state) {
      console.log(state);
    },
    setRoom(state, payload) {
      state.roomName = payload.name;
      state.roomPrice = payload.price;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getRoomName: (state) => state.roomName,
    getReservationDateFrom: (state) => state.reservationDateFrom,
    getReservationDateUntil: (state) => state.reservationDateUntil,
    getAdults: (state) => state.adults,
    getChildren: (state) => state.children,
    getRoomPrice: (state) => state.roomPrice,
  },
});
