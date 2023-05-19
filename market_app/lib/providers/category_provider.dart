import 'package:market_app/api/api_service.dart';
import 'package:market_app/models/category.dart';
import 'package:market_app/models/pagination.dart';

import 'package:flutter_riverpod/flutter_riverpod.dart';

final categoriesProvider = 
FutureProvider.family<List<Category>?, PaginationModel>(
  (ref, paginationModel) {
    final apiRepository = ref.watch(apiService);

    return apiRepository.getCategories(
      paginationModel.page,
      paginationModel.pageSize,
    );
  },
);