package com.example.ecommerce_backend.controller;

import com.example.ecommerce_backend.dto.ProductDto;
import com.example.ecommerce_backend.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<ProductDto> getProducts() {
        List<ProductDto> products = productService.getProducts();
        System.out.println("Test now 2");
        return products;
    }

    @GetMapping("/{id}")
    public ProductDto getProductById(@PathVariable Long id) {
        ProductDto productDto = productService.getProductById(id);
        System.out.println(productDto);
        return productDto;
    }


}
