from django.urls import path
from . import views

from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'drf-categories', CategoryViewSet)
router.register(r'drf-products', ProductViewSet)

urlpatterns = [
    path('products/', views.products_list, name='product_list'),
    path('products/<int:id>/', views.products_detail, name='product_detail'),
    path('categories/', views.category_list, name='category_list'),
    path('categories/<int:id>/', views.category_detail, name='category_detail'),
    path('categories/<int:id>/products/', views.category_products, name='category_products'),
] + router.urls