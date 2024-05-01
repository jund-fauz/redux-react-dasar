import {useDispatch, useSelector} from "react-redux"
import {persistor} from "./config/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {counterRootSelector} from "./config/redux/counter/selector";
import * as action from "./config/redux/counter/action";

/* Alur Redux:
* 1. View melakukan Dispatch Action
* 2. Action membawa (state lama + payload) ke Reducer
* 3. Reducer mengubah state lama berdasarkan payload yang dibawa Action
* 4. Reducer mengembalikan ke View
* 5. View melakukan render ulang
* */
export default function App() {
  const counterState = useSelector(counterRootSelector/*, shallowEqual*/) // shallowEqual hanya digunakan untuk state yang berbentuk objek
  const dispatch = useDispatch()
  return (
    <PersistGate persistor={persistor} loading={null}>
      <div style={{display: "flex", gap: '7px'}}>
        <div>{counterState.counter}</div>
        <button onClick={() => dispatch(action.increment())}>+</button>
        <button onClick={() => dispatch(action.decrement())}>-</button>
      </div>
    </PersistGate>
  )
}

/* Dependencies yang perlu diinstall utk menggunakan Redux:
* 1. redux
* 2. redux-persist (Untuk menyimpan state meskipun browser direfresh)
* 3. react-redux (Custom react hook untuk penggunaan redux) */