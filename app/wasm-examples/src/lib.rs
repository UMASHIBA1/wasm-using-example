use wasm_bindgen::prelude::*;


// When the `wee_alloc` feature is enabled, this uses `wee_alloc` as the global
// allocator.
//
// If you don't want to use `wee_alloc`, you can safely delete this.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


// This is like the `main` function, except for JavaScript.
#[wasm_bindgen]
pub fn sort_str(mut js_list: Box<[JsValue]>) -> Box<[JsValue]> {
    // This provides better error messages in debug mode.
    // It's disabled in release mode so it doesn't bloat up the file size.
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    js_list.sort_by(|a,b| a.as_string().cmp(&b.as_string()));
    js_list
    // let mut str_list: Vec<String> = js_list.into_iter().map(|x|x.as_string().unwrap()).collect();

    // str_list.sort();
    // let new_js_list = str_list.into_iter().map(|x| JsValue::from_str(x.as_str())).collect();
    // new_js_list
}
