<script lang="ts">
    import { Card, CardBody, CardText, CardTitle, Row, Col } from '@sveltestrap/sveltestrap';
    import PageHeader from '@/components/PageHeader.svelte';

    const stats = [
        { icon: 'bi-people-fill', label: 'Pengguna', value: '128' },
        { icon: 'bi-box-seam', label: 'Produk', value: '32' },
        { icon: 'bi-clipboard-check', label: 'Transaksi', value: '540' },
        { icon: 'bi-graph-up', label: 'Pendapatan', value: 'Rp 4,2jt' },
    ];
</script>

<PageHeader title="Dashboard" subtitle="Ringkasan aktivitas aplikasi Anda" />

<Row>
    {#each stats as stat (stat.label)}
        <Col md={6} xl={3} class="mb-3">
            <Card class="border-0 shadow-sm h-100">
                <CardBody>
                    <div class="d-flex align-items-center gap-3">
                        <div
                            class="d-flex align-items-center justify-content-center rounded-3 surface-primary"
                            style="width: 48px; height: 48px;"
                        >
                            <i class={`bi ${stat.icon} text-white fs-4`}></i>
                        </div>
                        <div>
                            <CardTitle class="h5 mb-0">{stat.value}</CardTitle>
                            <CardText class="text-muted small mb-0">
                                {stat.label}
                            </CardText>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    {/each}
</Row>