'use client'
import { configureStore } from "@reduxjs/toolkit"
import languageReducer from "./Features/Language/LanguageSlice"

export const store = configureStore ({
        reducer:{
            language: languageReducer
        }
})
