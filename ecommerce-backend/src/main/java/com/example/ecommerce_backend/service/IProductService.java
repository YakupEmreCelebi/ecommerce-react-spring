package com.example.ecommerce_backend.service;

import com.example.ecommerce_backend.dto.ProductDto;

import java.util.List;

public interface IProductService {

    List<ProductDto> getProducts();
}
