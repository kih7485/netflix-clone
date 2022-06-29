import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import {useRouter} from 'next/router'
import { auth } from '../firebase'
function useAuth() {
  return (
    <div>useAuth</div>
  )
}

export default useAuth