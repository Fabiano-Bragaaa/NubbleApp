import {useRef} from 'react';
import {FlatList, FlatListProps, RefreshControl} from 'react-native';

import {QueryKeys, usePaginatedList} from '@infra';
import {useScrollToTop} from '@react-navigation/native';

import {EmptyList, EmptyListProps} from './components/EmptyList';

type ItemTConstraints = {
  id: number | string;
};

type Props<ItemT extends ItemTConstraints> = {
  queryKey: QueryKeys[];
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
  renderItem: FlatListProps<ItemT>['renderItem'];
  flatListProps: Omit<Partial<FlatListProps<ItemT>>, 'renderItem'>;
  emptyListProps: Pick<EmptyListProps, 'emptyMessage' | 'errorMessage'>;
};

export function InfinityScrollList<ItemT extends ItemTConstraints>({
  flatListProps,
  emptyListProps,
  queryKey,
  getList,
  renderItem,
}: Props<ItemT>) {
  const flatListRef = useRef<FlatList<ItemT>>(null);
  useScrollToTop(flatListRef);
  const {list, isLoading, refresh, fetchNextPage, isError} = usePaginatedList(
    queryKey,
    getList,
  );

  return (
    <FlatList
      ref={flatListRef}
      data={list}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.1}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
      refreshing={isLoading}
      contentContainerStyle={{flex: list.length === 0 ? 1 : undefined}}
      ListEmptyComponent={
        <EmptyList
          error={isError}
          loading={isLoading}
          refetch={refresh}
          {...emptyListProps}
        />
      }
      {...flatListProps}
    />
  );
}
