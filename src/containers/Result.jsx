import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

const Result = ({ error, isLoading, data }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => (
        a.title.localeCompare(b.title)
        || a.venue.localeCompare(b.venue)
        || b.year.localeCompare(a.year)
        || a.url.localeCompare(b.url)
      ),
    },
    {
      title: 'Venue',
      dataIndex: 'venue',
      key: 'venue',
      sorter: (a, b) => (
        a.venue.localeCompare(b.venue)
        || b.year.localeCompare(a.year)
        || a.title.localeCompare(b.title)
        || a.url.localeCompare(b.url)
      ),
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => (
        b.year.localeCompare(a.year)
        || a.venue.localeCompare(b.venue)
        || a.title.localeCompare(b.title)
        || a.url.localeCompare(b.url)
      ),
    },
    {
      title: 'Url',
      dataIndex: 'url',
      key: 'url',
      render: url => (
        <a href={url}>
          {url}
        </a>
      ),
      sorter: (a, b) => (
        a.url.localeCompare(b.url)
        || a.venue.localeCompare(b.venue)
        || b.year.localeCompare(a.year)
        || a.title.localeCompare(b.title)
      ),
    },
  ];

  if (error) {
    return (
      <h2>
        Data Error
      </h2>
    );
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={isLoading}
      pagination={{
        defaultPageSize: 30,
        hideOnSinglePage: true,
        pageSizeOptions: ['10', '20', '30', '40', '50'],
        showQuickJumper: true,
        showSizeChanger: true,
      }}
    />
  );
};

const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading,
  data: state.data,
});

export default connect(mapStateToProps)(Result);
