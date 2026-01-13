package com.example.ecommerce_backend.controller;

import com.example.ecommerce_backend.dto.ProductDto;
import com.example.ecommerce_backend.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/v1/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final IProductService productService;

    @Autowired
    public ProductController(IProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<ProductDto>> getProducts() {
        List<ProductDto> products = productService.getProducts();
        return ResponseEntity.ok().body(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long id) {
        ProductDto productDto = productService.getProductById(id);
        System.out.println(productDto);
        return ResponseEntity.ok().body(productDto);
    }


}
