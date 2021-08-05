import { createStore } from 'vuex';

export default createStore({
  state: {
    roomName: 'No selected room jet',
    reservationDateFrom: new Date(),
    reservationDateUntil: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    adults: '1',
    children: '1',
    roomPrice: 'No price jet',
  },
  mutations: {
    setRoomName(state, payload) {
      state.roomName = payload;
    },
    setReservationDateFrom(state, payload) {
      state.reservationDateFrom = payload;
    },
    setReservationDateUntil(state, payload) {
      state.reservationDateUntil = payload;
    },
    setAdults(state, payload) {
      state.adults = payload;
    },
    setChildren(state, payload) {
      state.children = payload;
    },
    setRoomPrice(state, payload) {
      state.roomPrice = payload;
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
