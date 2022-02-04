package main

import (
    "fmt"
//     "log"
    "net/http"
    "gorm.io/gorm"
    "encoding/json"
)
import "gorm.io/driver/sqlite"
type Orders struct{
   // gorm.Model
    OrderId uint `json:"order_id"`
    DateOfOrder string `json:"date_of_order"`
    OrderDetailsId string `json:"order_details_id"`
    CustomerId uint `json:"customer_id"`
    SupplierId uint `json:"supplier_id"`
    Status string `json:"status"`
}
var db *gorm.DB
var err error
func InitDB() {
	db,err= gorm.Open(sqlite.Open("INVENTORY_MANAGEMENT.db"), &gorm.Config{})
	if(err!= nil){
		fmt.Println(err.Error())
		panic("Database connection failed")
	}
	//db.AutoMigrate(&Orders{})
}

func sendErr(w http.ResponseWriter, code int, message string) {
	resp, _ := json.Marshal(map[string]string{"error": message})
	http.Error(w, string(resp), code)
}

func getAllCustomerOrders(w http.ResponseWriter, r *http.Request){
    w.Header().Set("Content-Type","application/json")
    var orders []Orders
    e:= db.Find(&orders).Error
    if e != nil {
		sendErr(w, http.StatusInternalServerError, err.Error())
		return
	}
	err = json.NewEncoder(w).Encode(orders)
	if e != nil {
		sendErr(w, http.StatusInternalServerError, err.Error())
	}
    // data,_:= json.Marshal(&orders)
    // fmt.Fprint(w, string(data))

    // fmt.Println("Hello world")
    // log.Fatal("Hello")
    // db.Raw("select id, date_of_order, order_details_id, customer_id, supplier_id, status from Orders where id=?",1).Scan(&orders)
    // data,_:= json.Marshal(&orders)
    // fmt.Fprint(w, string(data))

}

func getCustomerOrderByID(w http.ResponseWriter, r *http.Request){
    var order Orders
    db.Raw("select id, date_of_order, order_details_id, customer_id, supplier_id, status from Orders where id=?",1).Scan(&order)
    data,_:= json.Marshal(&order)
    fmt.Fprint(w, string(data))
}
func addCustomerOrder(w http.ResponseWriter, r *http.Request){
   w.Header().Set("Content-Type","application/json")
   var order Orders
   json.NewDecoder(r.Body).Decode(&order)
   db.Create(&order)
   json.NewEncoder(w).Encode(order)
    // fmt.Println("Hello")
}
func updateCustomerOrder(w http.ResponseWriter, r *http.Request){
   
}

// func handleRequests() {
//     http.HandleFunc("/customer/orders/all", getAllCustomerOrders)
//     http.HandleFunc("/customer/order/{ordId}", getCustomerOrderByID)
//     http.HandleFunc("/customer/orders/add/", addCustomerOrder)
//     http.HandleFunc("/customer/orders/update/", updateCustomerOrder)
//     log.Fatal(http.ListenAndServe(":8085", nil))
//     fmt.Println("Hello world")
// }

// func main() {
//     fmt.Println("Hello world")
//     //handleRequests()
// }