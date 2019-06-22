(ns app.main
  (:require [reagent.core :as r]))

(defn component [] 
    [:div
        [:p "I am component"]])

(defn render [] 
    (r/render [component] 
        (.-body js/document)))

(defn reload! []
  (println "Code updated."))

(defn main! []
  (println "App loaded!"))