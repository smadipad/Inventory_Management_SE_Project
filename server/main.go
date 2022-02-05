package main

import "github.com/gorilla/mux"
import "net/http"
import "log"
// import "gorm.io/gorm"


func InitRouter(){
	router:= mux.NewRouter()
	router.HandleFunc("/customer/orders/all", getAllCustomerOrders).Methods("GET")
    router.HandleFunc("/customer/order/{ordId}", getCustomerOrderByID).Methods("GET")
    router.HandleFunc("/customer/orders/add", addCustomerOrder).Methods("POST")
    router.HandleFunc("/customer/orders/{ordId}", updateCustomerOrder).Methods("PUT")
	router.HandleFunc("/customer/orders/{ordId}", deleteCustomerOrder).Methods("DELETE")
	http.Handle("/",router)
	log.Fatal(http.ListenAndServe(":8085", nil))
}

func main() {
	InitDB()
    InitRouter()
	
}