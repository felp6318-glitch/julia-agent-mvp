# backup.ps1 — cria um ZIP do projeto em ../backups/NOME-AAAA-MM-DD_HH-MM-SS.zip
# Observação: sem emojis e usando apenas aspas normais para evitar erro de parser.

$ErrorActionPreference = 'Stop'

# Diretórios base
$Root = Split-Path -Path $MyInvocation.MyCommand.Path -Parent
$ProjectName = Split-Path -Leaf $Root
$Parent = Split-Path $Root -Parent
$BackupsDir = Join-Path $Parent 'backups'

# Nome do arquivo destino
$Timestamp = Get-Date -Format 'yyyy-MM-dd_HH-mm-ss'
$ZipPath = Join-Path $BackupsDir ("{0}-{1}.zip" -f $ProjectName, $Timestamp)

Write-Host "Root do projeto: $Root"
Write-Host "Pasta de backups: $BackupsDir"
Write-Host "Arquivo ZIP: $ZipPath"

# Garante pasta ../backups
New-Item -ItemType Directory -Force -Path $BackupsDir | Out-Null

# Monta a lista do que entra no zip (exclui algumas pastas comuns)
$excludeNames = @('backups', '.git', 'node_modules', '.vscode')
$itemsToArchive = Get-ChildItem -LiteralPath $Root -Force |
  Where-Object { $excludeNames -notcontains $_.Name }

# Remove zip existente com mesmo nome (se houver)
if (Test-Path -LiteralPath $ZipPath) {
  Remove-Item -LiteralPath $ZipPath -Force
}

# Compacta
Compress-Archive -Path $itemsToArchive -DestinationPath $ZipPath -CompressionLevel Optimal

Write-Host "Backup ZIP criado com sucesso em: $ZipPath"
