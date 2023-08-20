export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllItemsByUserid(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart?user" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(updatedItem) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/cart/" + updatedItem.id,
      {
        method: "PATCH",
        body: JSON.stringify(updatedItem),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}
