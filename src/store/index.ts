import { createStore } from 'vuex';

//producer: JSON.parse(localStorage.getItem('producer') || "{}")

export default createStore({
  state: {
    roomName: sessionStorage.getItem('roomName') || 'No room selected',
    reservationDateFrom: new Date(
      sessionStorage.getItem('reservationDateFrom') || new Date().toUTCString()
    ),
    reservationDateUntil: new Date(
      sessionStorage.getItem('reservationDateUntil') ||
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString()
    ),
    adults: sessionStorage.getItem('adults') || '2',
    children: sessionStorage.getItem('children') || '2',
    roomPrice: parseInt(sessionStorage.getItem('roomPrice') || '0'),
  },
  mutations: {
    setRerservation(state) {
      sessionStorage.setItem('roomName', state.roomName);
      sessionStorage.setItem(
        'reservationDateFrom',
        state.reservationDateFrom.toUTCString()
      );
      sessionStorage.setItem(
        'reservationDateUntil',
        state.reservationDateUntil.toUTCString()
      );
      sessionStorage.setItem('adults', state.adults);
      sessionStorage.setItem('children', state.children);
      sessionStorage.setItem('roomPrice', state.roomPrice.toString());
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
